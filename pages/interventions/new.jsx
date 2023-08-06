import Layout from '@/components/Layout';
import api from '@/utils/axiosInstance';
import useSwr from 'swr';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import SearchInput from '@/components/SearchInput';
import AddIntervention from '@/public/svgs/AddInterventionIcon';
import Link from 'next/link';

const interventions = {
  'Ineffective medicine': {
    reason: [
      'A medical condition requires combination therapy (synergistic or additive)',
      'The medicine is not the most effective for the management of the patient',
      'The medicine is generally not effective/substandard',
      'The condition is resistant to the medication',
      'The dosage form is inappropriate',
    ],
    solution: ['Switch Medicine', 'Switch Dosage form'],
  },

  'Drug therapy is not required': {
    reason: [
      'No indication for prescribed drug',
      'Duplicated therapy (Multiple drugs of similar MoA with no known additional benefits)',
      'Addiction/Drug is being used for recreational purposes',
      'Drugs can be avoided without change in outcome',
      'The non-pharmacological approach will still work',
    ],
    solution: [
      'Discontinue Medicine',
      'Triturate dose down',
      'Refer to specialist/ Counselling (Checkbox)',
    ],
  },
  'The patient needs additional therapy': {
    reason: ['Untreated indications', 'Prophylactic therapy'],
    solution: [
      'Add identified indication and new therapy',
      'Add prophylactic therapy',
    ],
  },
  'Dosage too low (Underdose)': {
    reason: [
      'The dose is too low to give the desired outcome',
      'The dosing frequency (dosage regimen) is too long',
      'The duration of therapy is too short',
    ],
    solution: ['Adjust Dose/Frequency/Duration'],
  },
  'Dosage too high (Overdose)': {
    reason: [
      'The dose is too high for the patient',
      'The dosing frequency is too short',
      'The regimen was administered or changed too rapidly',
      'The duration of therapy is too long',
      'The dose was administered too rapidly',
    ],
    solution: ['Adjust Dose/Frequency/Duration'],
  },
  'Safety/ADR issues': {
    reason: [
      'Absolute contraindication is present',
      'The medication causes an undesirable reaction not related to the dose',
      'A safer medicine is needed due to patient risk factors',
      'A medicine interaction causes an undesirable reaction',
      'A medicine interaction causes a toxic reaction to the medication',
    ],
    solution: [
      'Discontinue Medicine and Monitor Patient',
      'Monitor Patient',
      'Discontinue and Switch Medicine',
      'Report ADR to FDA/ Counselling',
    ],
  },
  'Adherence issues': {
    reason: [
      'The patient did not understand the advice given',
      'Non-availability of the medicine',
      "Medicine worsens the patient's other medical conditions (drug-disease interaction)",
      'Treatment is complex/cumbersome',
      'Undesirable side effects',
      'The dosage form is not appropriate for the patient',
      'The patient prefers not to take the drug',
      'The patient forgets to take the medicine',
      'The medicine is too expensive',
      'The patient cannot swallow or self-administer the medication properly',
      'Limited accessibility to the medicine',
      'Knowledge/Awareness gap on disease condition.',
    ],
    solution: [
      'Counselling',
      'Find medicine for the patient',
      'Simplify Treatment (Switch to combination therapy/Switch drug formulation for pharmacokinetic advantage)',
      'Switch Medicine',
      'Switch Dosage Form',
      'Switch to more Affordable Medicine',
    ],
  },
};

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'grape', label: 'Grape' },
  { value: 'orange', label: 'Orange' },
];

const emfetcher = url => api.get(url).then(res => res.data.results);

const New = () => {
  const router = useRouter();
  const [diagnosis, setDiagnosis] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const { data: employerData } = useSwr(`/api/accounts/employers/`, emfetcher);

  const defaultValues = {
    patientName: '',
    interventionLocation: '',
    interventionDiagnosis: '',
    interventionReason: '',
    interventionSolution: '',
    moreDetails: '',
    medicationInvolved: '',
  };

  const {
    handleSubmit,
    register,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm(defaultValues);

  const handleDiagnosisChange = e => {
    setDiagnosis(e.target.value);
  };

  console.log(selectedOption);
  return (
    <Layout>
      <p className='text-xl font-medium '>Add New Intervention</p>
      <form
        className='flex flex-col gap-3 pt-8'
        onSubmit={handleSubmit(async data => {
          await api
            .post('/api/interventions/all_interventions/', {
              patient: selectedOption,
              ['pharmaceutical_care']: diagnosis,
              ['pharmaceutical_details']: data.interventionReason,
              medication: data.medicationInvolved,
              ['proposed_intervention']: data.interventionSolution,
              details: data.moreDetails,
              ['intervention_location']: data.interventionLocation,
            })
            .then(() => {
              alert('success');
              clearErrors();
              reset();
            })
            .catch(err => {
              console.error(err);
              alert('Network error, try again');
            });
        })}
      >
        <div className='flex flex-col gap-2'>
          <div className='flex flex-row items-center justify-between  py-3 focus:outline-none  border-b-[1px]'>
            <SearchInput
              options={options}
              setSelectedOption={setSelectedOption}
              selectedOption={selectedOption}
            />
            <Link href='/patients/new'>
              <AddIntervention />
            </Link>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <select
            type='text'
            id='interventionLocation'
            name='interventionLocation'
            className='px-5 py-3 focus:outline-none  border-b-[1px] bg-inherit'
            placeholder='Intervention Location'
            {...register('interventionLocation', { required: true })}
          >
            <option value=''>Select intervention location</option>
            {employerData?.map(employer => (
              <option value={employer['place_of_work']} key={employer.id}>
                {employer['place_of_work']}
              </option>
            ))}
          </select>
        </div>
        <div className='flex flex-col gap-2'>
          <select
            id='interventionDiagnosis'
            name='interventionDiagnosis'
            className='px-5 py-3 focus:outline-none  border-b-[1px] bg-inherit'
            value={diagnosis}
            onChange={e => {
              handleDiagnosisChange(e);
            }}
          >
            <option value=''>Select a diagnosis</option>
            {Object.keys(interventions).map(key => (
              <option value={key} key={key}>
                {key}
              </option>
            ))}
          </select>
        </div>
        <div className='flex flex-col gap-2'>
          <select
            id='interventionReason'
            name='interventionReason'
            className='px-5 py-3 focus:outline-none  border-b-[1px] bg-inherit'
            {...register('interventionReason', { required: true })}
          >
            <option value=''>Select a reason</option>
            {interventions[diagnosis]?.reason.map(reason => (
              <option value={reason} key={reason}>
                {reason}
              </option>
            ))}
          </select>
        </div>
        <div className='flex flex-col gap-2'>
          <select
            id='interventionSolution'
            name='interventionSolution'
            className='px-5 py-3 focus:outline-none  border-b-[1px] bg-inherit'
            {...register('interventionSolution', { required: true })}
          >
            <option value=''>Select a solution</option>
            {interventions[diagnosis]?.solution.map(solution => (
              <option value={solution} key={solution}>
                {solution}
              </option>
            ))}
          </select>
        </div>
        <div className='flex flex-col gap-2'>
          <input
            type='text'
            id='medicationInvolved'
            name='medicationInvolved'
            className='px-5 py-3 focus:outline-none  border-b-[1px]'
            placeholder='Medication Involved'
            {...register('medicationInvolved', { required: false })}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <textarea
            name='moreDetails'
            id='moreDetails'
            cols='30'
            rows='10'
            className='w-full h-36 border-[1px] px-5 py-2'
            placeholder='Provide more details'
            {...register('moreDetails', { required: false })}
          ></textarea>
        </div>
        <button className=' py-3 w-[50%] self-center rounded-md lg:text-lg bg-[#0146E9] text-white'>
          Add Intervention
        </button>
      </form>
    </Layout>
  );
};

export default New;

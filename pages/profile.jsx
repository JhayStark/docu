import api from '@/utils/axiosInstance';
import useSwr from 'swr';
import Layout from '@/components/Layout';
import AddIntervention from '@/public/svgs/AddInterventionIcon';
import EmployerModal from '@/components/EmployerModal';
import { IoMdPower } from 'react-icons/io';
import { useForm } from 'react-hook-form';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '@/context/AuthProvider';

const fetcher = url => api.get(url).then(res => res.data.results[0]);
const emfetcher = url => api.get(url).then(res => res.data.results);

const EmployerDetails = ({ employer }) => {
  return (
    <p className='px-2 py-1 text-xs lg:text-sm rounded-md bg-[#90a8e196] w-fit'>
      {employer['place_of_work']}
    </p>
  );
};

const Profile = () => {
  const [employerModal, setEmployerModal] = useState(false);
  const [gender, setGender] = useState('');
  const [professionalStatus, setProfessionalStatus] = useState('');

  const { userData, logout } = useContext(AuthContext);
  const { data } = useSwr(
    `/api/accounts/all_accounts/?email=${userData.email}`,
    fetcher
  );
  const { data: employerData } = useSwr(`/api/accounts/employers/`, emfetcher);

  useEffect(() => {
    if (data) {
      setGender(data['accounts_profile']['gender']);
      setProfessionalStatus(data['accounts_profile']['professional_status']);
    }
  }, [data]);

  const defaultValues = {
    user: '',
    phoneNumber: '',
    studentId: '',
    registrationNumber: '',
  };

  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm({ defaultValues });

  const ProfessionalIDInput = () => {
    const renderInputPlaceholder = () => {
      if (
        !professionalStatus.includes('Intern') &&
        !professionalStatus.includes('Student')
      ) {
        const registrationNumber =
          data['accounts_profile']['registration_number'];
        return registrationNumber ? registrationNumber : 'Registration Number';
      } else {
        const studentId = data['accounts_profile']['student_id'];
        return studentId ? studentId : 'Student ID';
      }
    };

    const getInputName = () => {
      return !professionalStatus.includes('Intern') &&
        !professionalStatus.includes('Student')
        ? 'registrationNumber'
        : 'studentId';
    };

    const getError = () => {
      if (errors.registrationNumber || errors.studentId) {
        return 'Invalid ID Number';
      }
    };

    const placeholderText = renderInputPlaceholder();

    return (
      <div>
        <label htmlFor='professionalIdInput' className='text-red-400'>
          {getError()}
        </label>
        <input
          id='professionalIdInput'
          name='professionalIdInput'
          type='text'
          placeholder={placeholderText}
          className={`px-2 py-2 w-full focus:outline-none bg-inherit border-b-2 border-[#A29E95] ${
            (errors.registrationNumber || errors.studentId) &&
            'border-b-red-400'
          }`}
          {...register(getInputName(), { minLength: 1, maxLength: 6 })}
        />
      </div>
    );
  };

  const saveUserData = async newData => {
    await api
      .patch(`/api/accounts/all_accounts/${data.id}/`, {
        email: newData.user || userData.email,
        ['is_new_user']: false,
        ['phone_number']: newData.phoneNumber || data['phone_number'],
        ['accounts_profile']: {
          gender: gender || data['accounts_profile']['gender'],
          ['professional_status']:
            professionalStatus ||
            data['accounts_profile']['professional_status'],
          ...(newData.registrationNumber && {
            ['registration_number']: newData.registrationNumber,
          }),
          ...(newData.studentId && { ['student_id']: newData.studentId }),
        },
      })
      .then(() => {
        alert('Profile Updated Successfully');
        clearErrors();
        reset();
      })
      .catch(() => {
        alert('Failed to update profile');
      });
  };
  return (
    <Layout>
      <div className='px-5 pb-20 lg:px-48'>
        <div className='flex flex-row items-center justify-between'>
          <p className='mb-3 text-xl font-medium '>User Profile</p>
          <IoMdPower
            onClick={logout}
            className='text-2xl text-red-400 cursor-pointer'
          />
        </div>
        <div className='flex flex-row items-center mb-5'>
          <img src='/images/avatar.svg' />
          <p className='ml-5 text-lg font-medium'>{`${userData.firstName} ${userData.lastName}`}</p>
        </div>
        <div>
          <form
            action=''
            className='flex flex-col gap-10'
            onSubmit={handleSubmit(async data => {
              saveUserData(data);
              reset();
            })}
          >
            <input
              type='email'
              name='email'
              id='email'
              className='px-2 py-2 focus:outline-none bg-inherit border-b-2 border-[#A29E95]'
              placeholder={data ? `${data.email}` : 'Email'}
              {...register('user', {
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              })}
            />
            <div className='flex flex-col'>
              {errors.phoneNumber && (
                <label htmlFor='professionalIdInput' className='text-red-400'>
                  Invalid Phone Number
                </label>
              )}
              <input
                type='text'
                id='phoneNumber'
                name='phoneNumber'
                className={`px-2 py-2 focus:outline-none bg-inherit border-b-2 border-[#A29E95] ${
                  errors.phoneNumber && 'border-b-red-400'
                }`}
                placeholder={
                  data && !data['phone_number'] == ''
                    ? data['phone_number']
                    : 'Phone Number'
                }
                {...register('phoneNumber', { pattern: /^(0|\\+233)\\d{9}$/ })}
              />
            </div>
            <select
              className='px-2 py-2 focus:outline-none bg-inherit border-b-2 border-[#A29E95]'
              value={gender}
              onChange={e => setGender(e.target.value)}
            >
              <option value=''>Select gender</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
            </select>
            <select
              name=''
              id=''
              className='bg-inherit border-b-2 border-[#A29E95] px-2 py-2 focus:outline-none'
              value={professionalStatus}
              onChange={e => setProfessionalStatus(e.target.value)}
            >
              <option value=''>Select your role</option>
              <option value='Pharmacy Student'>Pharmacy Student</option>
              <option value='Intern Pharmacist'>Intern Pharmacist</option>
              <option value='Pharmacist (B. Pharm)'>
                Pharmacist (B. Pharm)
              </option>
              <option value='Pharmacist (Pharm D)'>Pharmacist (Pharm D)</option>
            </select>
            {data && <ProfessionalIDInput />}
            <div>
              <div
                className='flex flex-row mb-2 items-center gap-2 text-[#0146E9] cursor-pointer'
                onClick={() => setEmployerModal(true)}
              >
                <AddIntervention />
                <p>Add Employer</p>
              </div>
              <div className='flex flex-row gap-2'>
                {employerData &&
                  employerData.map(employer => (
                    <EmployerDetails key={employer.id} employer={employer} />
                  ))}
              </div>
            </div>
            <button
              type='submit'
              className='mt-2 w-full py-4 bg-inherit border-2 self-center border-[#A29E95]'
            >
              Save
            </button>
          </form>

          {employerModal && (
            <EmployerModal setEmployerModal={setEmployerModal} />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Profile;

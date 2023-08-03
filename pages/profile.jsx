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
  const [role, setRole] = useState('');
  const [employerModal, setEmployerModal] = useState(false);
  const [professionalStatus, setProfessionalStatus] = useState('');
  const { userData, logout } = useContext(AuthContext);
  const { data } = useSwr(
    `/api/accounts/all_accounts/?email=${userData.email}`,
    fetcher
  );

  const { data: employerData } = useSwr(`/api/accounts/employers/`, emfetcher);

  const defaultValues = {
    user: '',
    phoneNumber: '',
    gender: '',
    placeOfWork: '',
    location: '',
    category: '',
    registrationNumber: ' ',
    studentId: '',
  };

  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm({ defaultValues });

  useEffect(() => {
    if (data) {
      setProfessionalStatus(data['accounts_profile']['professional_status']);
    }
  }, [data]);

  const saveUserData = async newData => {
    api
      .patch(`/api/accounts/all_accounts/${data.id}/`, {
        email: newData.user || userData.email,
        ['is_new_user']: false,
        ['phone_number']: newData.phoneNumber || data['phone_number'],
        ['accounts_profile']: {
          gender: newData.gender || data['accounts_profile']['gender'],
          ['professional_status']:
            professionalStatus ||
            data['accounts_profile']['professional_status'],
          ['registration_number']:
            newData.registrationNumber ||
            data['accounts_profile']['registration_number'],
          ['student_id']:
            newData.studentId || data['accounts_profile']['student_id'],
        },
      })
      .then(() => {
        alert('Success');
        reset();
      })
      .catch(() => alert('Failed to update profile'));
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
              type='text'
              className='px-2 py-2 focus:outline-none bg-inherit border-b-2 border-[#A29E95]'
              placeholder={data ? `${data.email}` : 'Email'}
              {...register('user')}
            />
            <input
              type='text'
              className='px-2 py-2 focus:outline-none bg-inherit border-b-2 border-[#A29E95]'
              placeholder={
                data && !data['phone_number'] == ''
                  ? data['phone_number']
                  : 'Phone Number'
              }
              {...register('phoneNumber')}
            />
            <select
              className='px-2 py-2 focus:outline-none bg-inherit border-b-2 border-[#A29E95]'
              {...register('gender')}
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
              onChange={e => {
                setRole(e.target.value);
                setProfessionalStatus(e.target.value);
              }}
            >
              <option value=''>Select your role</option>
              <option value='Student Intern'>Pharmacy Student</option>
              <option value='Intern Pharmacist'>Intern Pharmacist</option>
              <option value='Pharmacist (B. Pharm)'>
                Pharmacist (B. Pharm)
              </option>
              <option value='Pharmacist (Pharm D)'>Pharmacist (Pharm D)</option>
            </select>
            {professionalStatus.includes('Pharmacist') &&
              !professionalStatus.includes('Intern') && (
                <input
                  type='text'
                  className='px-2 py-2 focus:outline-none bg-inherit border-b-2 border-[#A29E95] '
                  placeholder={
                    data &&
                    !data['accounts_profile']['registration_number'] == ''
                      ? data['accounts_profile']['registration_number']
                      : 'Registration Number'
                  }
                  {...register('registrationNumber')}
                />
              )}
            {professionalStatus.includes('Intern') && (
              <input
                type='text'
                className='px-2 py-2 focus:outline-none bg-inherit border-b-2 border-[#A29E95]'
                placeholder={
                  data && !data['accounts_profile']['student_id'] == ''
                    ? data['accounts_profile']['student_id']
                    : 'Student ID'
                }
                {...register('studentId')}
              />
            )}
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

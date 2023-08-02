import api from '@/utils/axiosInstance';
import useSwr from 'swr';
import Layout from '@/components/Layout';
import AddIntervention from '@/public/svgs/AddInterventionIcon';
import { useForm } from 'react-hook-form';
import { FiEdit } from 'react-icons/fi';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '@/context/AuthProvider';

const fetcher = url => api.get(url).then(res => res.data.results[0]);
const emfetcher = url => api.get(url).then(res => res.data.results);

const EmployerDetails = ({ employer }) => {
  const [employerEdit, setEmployerEdit] = useState(false);
  const defaultValues = {
    placeOfWork: `${employer.place_of_work}`,
    location: `${employer.location}`,
    category: `${employer.category}`,
  };
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  return (
    <div className='flex flex-col p-5 mx-5 bg-[#7193e154] rounded-lg'>
      <form
        action=''
        className='flex flex-col'
        onSubmit={handleSubmit(
          async data =>
            await api
              .patch(`/api/accounts/employers/${employer.id}`, {
                location: data.location,
                category: data.category,
                place_of_work: data.placeOfWork,
              })
              .then(() => {
                alert('Success');
                reset();
              })
              .catch(() => alert('Failed to add employer'))
        )}
      >
        <div className='flex flex-row items-center justify-between'>
          <input
            className='text-xl bg-transparent w-[70%] placeholder:text-black focus:outline-none'
            placeholder={employer['place_of_work']}
            readOnly={employerEdit ? false : true}
            {...register('placeOfWork')}
          />
          <FiEdit
            className='text-yellow-700 cursor-pointer hover:scale-150'
            onClick={() => setEmployerEdit(prev => !prev)}
          />
        </div>
        <input
          className='text-sm bg-transparent w-[70%] placeholder:text-black focus:outline-none'
          placeholder={employer.location}
          {...register('location')}
        />
        <input
          className='text-sm bg-transparent w-[70%] placeholder:text-black focus:outline-none'
          placeholder={employer.category}
          {...register('category')}
        />
        {employerEdit && (
          <button
            type='submit'
            className='py-1 mt-1 text-white bg-green-300 rounded-md w-[50%] self-center cursor-pointer'
          >
            Save
          </button>
        )}
      </form>
    </div>
  );
};

const EmployerModal = ({ setEmployerModal }) => {
  const defaultValues = {
    placeOfWork: '',
    location: '',
    category: '',
  };
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center backdrop-blur-sm'>
      <div className='w-[80%] bg-white p-5 rounded-lg shadow-xl  '>
        <h2 className='mb-3 text-xl font-medium'>Employer Details</h2>
        <form
          className='flex flex-col gap-3'
          onSubmit={handleSubmit(
            async data =>
              await api
                .post('/api/accounts/employers/', {
                  location: data.location,
                  category: data.category,
                  place_of_work: data.placeOfWork,
                })
                .then(res => {
                  alert('success');
                  reset();
                })
                .catch(error => console.error(error))
          )}
        >
          <input
            type='text'
            placeholder='Employer Name'
            className='py-4 text-lg border-[1px] px-2 rounded-md focus:outline-none '
            {...register('placeOfWork')}
          />
          <input
            type='text'
            placeholder='Employer Location'
            className='px-2 py-4 text-lg rounded-md border-[1px] focus:outline-none'
            {...register('location')}
          />
          <input
            type='text'
            placeholder='Employer Category'
            className='px-2 py-4 text-lg rounded-md border-[1px] focus:outline-none'
            {...register('category')}
          />
          <div className='flex flex-row gap-3 '>
            <button
              type='submit'
              className='p-2 mt-4 font-medium text-white bg-green-400 rounded-lg'
            >
              Add Employer
            </button>
            <button
              onClick={() => setEmployerModal(false)}
              className='p-2 mt-4 font-medium text-white bg-red-400 rounded-lg'
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Profile = () => {
  const [role, setRole] = useState('');
  const [employerModal, setEmployerModal] = useState(false);
  const [professionalStatus, setProfessionalStatus] = useState('');
  const { userData } = useContext(AuthContext);
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
        <div className='flex flex-row items-center pt-16 mb-5'>
          <img src='/images/avatar.svg' />
          <p className='ml-5 text-lg font-medium'>{`${userData.firstName} ${userData.lastName}`}</p>
        </div>
        {/* <p className='py-3 text-xl font-medium'>User Profile</p> */}
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
              placeholder={data ? data['phone_number'] : 'Phone Number'}
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
                    data
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
                  data ? data['accounts_profile']['student_id'] : 'Student ID'
                }
                {...register('studentId')}
              />
            )}
            <button
              type='submit'
              className='mt-5 px-36 py-4 bg-inherit border-2 self-center border-[#A29E95]'
            >
              Save
            </button>
          </form>
          <div
            className='flex flex-row my-5 items-center gap-2 text-[#0146E9] cursor-pointer'
            onClick={() => setEmployerModal(true)}
          >
            <AddIntervention />
            <p>Add Employer</p>
          </div>

          <div className='grid grid-cols-2'>
            {employerData &&
              employerData.map(employer => (
                <EmployerDetails key={employer.id} employer={employer} />
              ))}
          </div>
          {employerModal && (
            <EmployerModal setEmployerModal={setEmployerModal} />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Profile;

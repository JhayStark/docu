import Layout from '@/components/Layout';
import api from '@/utils/axiosInstance';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const New = () => {
  const router = useRouter();
  const [error, setError] = useState('');
  const defaultValues = {
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    weight: '',
    furtherDetails: '',
    phoneNumber: '',
  };

  const {
    handleSubmit,
    register,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm(defaultValues);

  return (
    <Layout>
      <form
        className='flex flex-col gap-3 pt-8'
        onSubmit={handleSubmit(async data => {
          await api
            .post('/api/interventions/all_patients/', {
              first_name: data.firstName,
              last_name: data.lastName,
              age: data.age,
              gender: data.gender,
              weight: data.weight,
              further_details: data.furtherDetails,
              phone_number: data.phoneNumber,
            })
            .then(() => {
              alert('Patient created Succesfully ');
              router.push('/patients');
            })
            .catch(err => {
              alert('Failed to create patient, please try again');
            });
        })}
      >
        <div className='flex flex-col gap-2'>
          <input
            type='text'
            id='firstName'
            name='firstName'
            className='px-5 py-3 focus:outline-none rounded-md bg-[#F0F0F0]'
            placeholder='First Name'
            {...register('firstName', { required: true })}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <input
            type='text'
            id='lastName'
            name='lastName'
            className='px-5 py-3 focus:outline-none rounded-md bg-[#F0F0F0]'
            placeholder='Last Name'
            {...register('lastName', { required: true })}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <input
            type='text'
            id='age'
            name='age'
            className='px-5 py-3 focus:outline-none rounded-md bg-[#F0F0F0]'
            placeholder='Age'
            {...register('age', { required: true })}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <select
            type='text'
            id='gender'
            name='gender'
            className='px-5 py-3 focus:outline-none rounded-md bg-[#F0F0F0]'
            {...register('gender', { required: true })}
          >
            <option value=''>Gender</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
          </select>
        </div>
        <div className='flex flex-col gap-2'>
          <input
            type='text'
            id='weight'
            name='weight'
            className='px-5 py-3 focus:outline-none rounded-md bg-[#F0F0F0]'
            placeholder='Weight in kilograms'
            {...register('weight', { required: true })}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <input
            type='text'
            id='phoneNumber'
            name='phoneNumber'
            className='px-5 py-3 focus:outline-none rounded-md bg-[#F0F0F0]'
            placeholder='024000000'
            {...register('phoneNumber', { required: true })}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <textarea
            name='furtherDetails'
            id='furtherDetails'
            cols='30'
            rows='10'
            className='w-full h-36 bg-[#F0F0F0] px-5 py-2'
            placeholder='Provide more details'
            {...register('furtherDetails', { required: false })}
          ></textarea>
        </div>

        <button className=' py-3 w-[50%] mt-10 self-center rounded-md lg:text-lg bg-[#0146E9] text-white'>
          Add Patient
        </button>
      </form>
    </Layout>
  );
};

export default New;

import Layout from '@/components/Layout';
import api from '@/utils/axiosInstance';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const New = () => {
  const router = useRouter();
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
      <p className='text-xl font-medium '>Add New Patient</p>
      <form
        className='flex flex-col gap-3 pt-8'
        onSubmit={handleSubmit(async data => {
          await api
            .post('/api/interventions/all_patients/', {
              ['first_name']: data.firstName,
              ['last_name']: data.lastName,
              age: data.age,
              gender: data.gender,
              weight: data.weight,
              ['further_details']: data.furtherDetails,
              ['phone_number']: data.phoneNumber,
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
            className={`px-5 py-3 focus:outline-none  border-b-[1px] ${
              errors.firstName && 'placeholder:text-red-300 border-b-red-400'
            }`}
            placeholder={
              errors.firstName ? errors.firstName.message : 'First Name'
            }
            {...register('firstName', { required: 'Please enter first name' })}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <input
            type='text'
            id='lastName'
            name='lastName'
            className={`px-5 py-3 focus:outline-none  border-b-[1px] ${
              errors.lastName && 'placeholder:text-red-300 border-b-red-400'
            }`}
            placeholder={
              errors.lastName ? errors.lastName.message : 'Last Name'
            }
            {...register('lastName', { required: 'Please enter last name' })}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <input
            type='text'
            id='age'
            name='age'
            className={`px-5 py-3 focus:outline-none  border-b-[1px] ${
              errors.age && 'placeholder:text-red-300 border-b-red-400'
            }`}
            placeholder={errors.age ? errors.age.message : 'Age'}
            {...register('age', { required: 'Please enter age' })}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <select
            type='text'
            id='gender'
            name='gender'
            className={`px-5 py-3 focus:outline-none  border-b-[1px] ${
              errors.gender && 'placeholder:text-red-300 border-b-red-400'
            }`}
            {...register('gender', { required: 'Please enter gender' })}
          >
            <option value=''>
              {errors.gender ? errors.gender.message : 'Select Gender'}
            </option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
          </select>
        </div>
        <div className='flex flex-col gap-2'>
          <input
            type='text'
            id='weight'
            name='weight'
            className={`px-5 py-3 focus:outline-none  border-b-[1px] ${
              errors.weight && 'placeholder:text-red-300 border-b-red-400'
            }`}
            placeholder={
              errors.weight ? errors.weight.message : 'Weight in kilograms'
            }
            {...register('weight', { required: 'Please enter weight' })}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <input
            type='text'
            id='phoneNumber'
            name='phoneNumber'
            className={`px-5 py-3 focus:outline-none  border-b-[1px] ${
              errors.phoneNumber && 'placeholder:text-red-300 border-b-red-400'
            }`}
            placeholder={
              errors.phoneNumber ? errors.phoneNumber.message : '0200000000'
            }
            {...register('phoneNumber', {
              required: 'Please enter phone number',
            })}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <textarea
            name='furtherDetails'
            id='furtherDetails'
            cols='30'
            rows='10'
            className='w-full h-36 border-[1px] px-5 py-2'
            placeholder='Provide more details'
            {...register('furtherDetails')}
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

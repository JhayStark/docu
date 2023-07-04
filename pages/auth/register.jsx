import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Register = () => {
  const router = useRouter();
  const [registerError, setRegisterError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
  };

  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm({ defaultValues });

  const registerUser = data => {
    axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register/`, {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        password: data.password,
        password2: data.password,
        username: data.email,
      })
      .then(res => {
        if (res.status === 201) {
          alert('User created successfully');
          reset();
          clearErrors();
          router.push('/auth/login');
        }
      })
      .catch(err => {
        if (err.response.data.username) {
          setRegisterError(err.response.data.username);
        } else {
          setRegisterError(err.response.data.password);
        }
      });
  };

  return (
    <>
      <div className='flex flex-row justify-center h-full overflow-hidden '>
        <div className='w-[60vw] h-screen opacity-80 hidden lg:block relative'>
          <Image
            src='https://res.cloudinary.com/jhay/image/upload/v1688194743/docu-pharma/as4epwth_wrj8ve.png'
            fill
            alt='Patient and Pharmacist'
          />
        </div>
        <div className='lg:w-[40vw]'>
          <div className='flex flex-col items-center justify-center w-full h-full '>
            <form
              onSubmit={handleSubmit(async data => {
                registerUser(data);
              })}
              className='flex flex-col items-center justify-center w-full h-[100vh] lg:h-full gap-5 lg:gap-10 p-2 m-auto'
            >
              <h1 className='text-xl font-semibold text-gray-700 '>
                Create an account
              </h1>
              <div className='flex flex-col gap-4'>
                <input
                  type='text'
                  placeholder={`${
                    errors.firstName
                      ? `${errors.firstName?.message}`
                      : `First name`
                  }`}
                  className={`p-2 bg-transparent border-b-2 outline-none w-60 placeholder:text-slate-600 ${
                    errors.firstName &&
                    `placeholder:text-red-500 border-red-500`
                  }`}
                  {...register('firstName', {
                    required: 'Enter your first name',
                  })}
                />

                <input
                  type='text'
                  placeholder={`${
                    errors.lastName
                      ? `${errors.lastName?.message}`
                      : `Last name`
                  }`}
                  className={`p-2 col-span-2 bg-transparent border-b-2 outline-none w-60 placeholder:text-slate-600 ${
                    errors.lastName && `placeholder:text-red-500 border-red-500`
                  }`}
                  {...register('lastName', {
                    required: 'Enter your Last name',
                  })}
                />
                <input
                  type='text'
                  placeholder={`${
                    errors.email ? `${errors.email?.message}` : `Email`
                  }`}
                  className={`p-2 bg-transparent border-b-2 outline-none w-60 placeholder:text-slate-600 ${
                    errors.email && `placeholder:text-red-500 border-red-500`
                  }`}
                  {...register('email', {
                    required: 'Enter your email',
                    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  })}
                />
                <input
                  type='text'
                  placeholder={`${
                    errors.phoneNumber
                      ? `${errors.phoneNumber?.message}`
                      : `Phone number`
                  }`}
                  className={`p-2 bg-transparent col-span-2 border-b-2 outline-none w-60 placeholder:text-slate-600 ${
                    errors.phoneNumber &&
                    `placeholder:text-red-500 border-red-500`
                  }`}
                  {...register('phoneNumber', {
                    required: 'Enter your phone number',
                  })}
                />

                <input
                  type='password'
                  placeholder={`${
                    errors.password ? `${errors.password?.message}` : `Password`
                  }`}
                  className={`p-2 bg-transparent border-b-2 outline-none w-60 placeholder:text-slate-600 ${
                    errors.password && `placeholder:text-red-500 border-red-500`
                  }`}
                  {...register('password', {
                    required: 'Enter your password',
                    minLength: 8,
                  })}
                />
                <input
                  type='password'
                  value={confirmPassword}
                  onChange={event => setConfirmPassword(event.target.value)}
                  placeholder={`${
                    errors.password
                      ? `${errors.password?.message}`
                      : ` Confirm password`
                  }`}
                  className={`p-2 bg-transparent border-b-2 outline-none w-60 placeholder:text-slate-600 ${
                    errors.password && `placeholder:text-red-500 border-red-500`
                  }`}
                />
              </div>
              {registerError && (
                <p className='text-xl text-center text-red-500'>
                  {registerError}
                </p>
              )}
              <button
                type='submit'
                className='px-3 py-2 font-medium text-white bg-blue-700 rounded cursor-pointer w-60 hover:bg-opacity-90'
              >
                Sign Up
              </button>
              <Link
                href='/auth/login'
                className='font-medium text-blue-700 cursor-pointer hover:underline hover:bg-opacity-90'
              >
                Login?
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { AuthContext } from '@/context/AuthProvider';
import axios from 'axios';
import Image from 'next/image';

const Login = () => {
  const [loginError, setLoginError] = useState('');
  const { login } = useContext(AuthContext);
  const defaultValues = {
    email: '',
    password: '',
  };

  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm({ defaultValues });

  const loginUser = data => {
    axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login/`, data)
      .then(res => {
        login(res.data, data.email);
        clearErrors();
        reset();
      })
      .catch(err => {
        console.error(err);
        setLoginError('Enter valid username and password');
      });
  };

  return (
    <>
      <div className='flex flex-row justify-center overflow-hidden w-full h-[100vh] '>
        <div className='w-[65vw] hidden lg:block h-screen  relative'>
          <Image
            src='https://res.cloudinary.com/jhay/image/upload/v1688194743/docu-pharma/as4epwth_wrj8ve.png'
            alt='intervention logo'
            fill
          />
        </div>
        <div className='lg:w-[35vw] h-full'>
          <div className='flex flex-col items-center justify-center w-full h-full '>
            <form
              onSubmit={handleSubmit(async data => {
                loginUser(data);
              })}
              className='flex flex-col items-center justify-center gap-8 '
            >
              <h1 className='text-2xl font-semibold text-center text-gray-700'>
                Login Existing Account
              </h1>

              <input
                autoComplete='none'
                type='text'
                placeholder={errors.email ? 'Enter valid email' : 'Enter email'}
                className={`p-2 bg-transparent border-b-2 outline-none w-full placeholder:text-slate-600 ${
                  errors.email && `placeholder:text-red-500 border-red-500`
                }`}
                {...register('email', {
                  required: 'Enter valid email',
                  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                })}
              />

              <input
                autoComplete='none'
                type='password'
                placeholder={
                  errors.password ? errors.password.message : 'Enter password'
                }
                className={`p-2 bg-transparent border-b-2 outline-none w-full placeholder:text-slate-600 ${
                  errors.password && `placeholder:text-red-500 border-red-500`
                }`}
                {...register('password', {
                  required: 'Enter valid password',
                })}
              />
              <div className='flex flex-col items-center w-full gap-2'>
                <button
                  type='submit'
                  className='px-3 py-2 text-lg font-medium text-white bg-[#292461] rounded cursor-pointer w-full hover:opacity-90'
                >
                  Login
                </button>
                <Link
                  href='/auth/register'
                  className='font-medium text-[#292461] cursor-pointer hover:underline  hover:opacity-90'
                >
                  Create account?
                </Link>
              </div>
              <p className='text-red-500'>{loginError}</p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

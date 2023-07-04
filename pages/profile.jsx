import { useState, useContext } from 'react';
import MobileNavbar from '@/components/MobileNavbar';
import { AuthContext } from '@/context/AuthProvider';
import api from '@/utils/axiosInstance';
import useSwr from 'swr';

const fetcher = url => api.get(url).then(res => res.data.results[0]);

const Profile = () => {
  const [role, setRole] = useState('');
  const { userData } = useContext(AuthContext);
  const { data, error, isLoading } = useSwr(
    `/api/accounts/all_accounts/?email=${userData.email}`,
    fetcher
  );

  return (
    <div>
      <div className='px-5 pb-20 lg:px-48'>
        <div className='flex flex-row items-center pt-16'>
          <div className='w-12 h-12 mr-2 bg-red-500 bg-center bg-cover rounded-full' />
          <p>Pharm. {`${userData.firstName} ${userData.lastName}`}</p>
        </div>
        <p className='py-3'>User Profile</p>
        <div>
          {!error && !isLoading && (
            <form action='' className='flex flex-col gap-7'>
              <input
                type='text'
                className='px-2 py-2 focus:outline-none bg-inherit border-b-2 border-[#A29E95]'
                placeholder={`${data.email}` || 'Email'}
              />
              <input
                type='text'
                className='px-2 py-2 focus:outline-none bg-inherit border-b-2 border-[#A29E95]'
                placeholder='Phone Number'
              />
              <input
                type='text'
                className='px-2 py-2 focus:outline-none bg-inherit border-b-2 border-[#A29E95]'
                placeholder={`${data.accounts_profile.gender}` || 'Gender'}
              />
              <input
                type='text'
                className='px-2 py-2 focus:outline-none bg-inherit border-b-2 border-[#A29E95]'
                placeholder={`${data.account_employers[0].place_of_work}`}
              />
              <input
                type='text'
                className='px-2 py-2 focus:outline-none bg-inherit border-b-2 border-[#A29E95]'
                placeholder={`${data.account_employers[0].location}`}
              />
              <input
                type='text'
                className='px-2 py-2 focus:outline-none bg-inherit border-b-2 border-[#A29E95]'
                placeholder={`${data.account_employers[0].category}`}
              />
              <select
                name=''
                id=''
                className='bg-inherit border-b-2 border-[#A29E95] px-2 py-2 focus:outline-none'
                onChange={e => setRole(e.target.value)}
              >
                <option value=''>Select your role</option>
                <option value='student'>Student Intern</option>
                <option value='student'>Intern Pharmacist</option>
                <option value='pharmacist'>Pharmacist (B. Pharm)</option>
                <option value='pharmacist'>Pharmacist (Pharm D)</option>
              </select>
              {role === 'pharmacist' && (
                <input
                  type='text'
                  className='px-2 py-2 focus:outline-none bg-inherit border-b-2 border-[#A29E95]'
                  placeholder='Registration Number (PA/HPA)'
                />
              )}
              {role === 'student' && (
                <input
                  type='text'
                  className='px-2 py-2 focus:outline-none bg-inherit border-b-2 border-[#A29E95]'
                  placeholder='Student Number'
                />
              )}
              <button
                type='submit'
                className='mt-10 px-36 py-4 bg-inherit border-2 self-center border-[#A29E95]'
              >
                Save
              </button>
            </form>
          )}
        </div>
      </div>
      <MobileNavbar />
    </div>
  );
};

export default Profile;

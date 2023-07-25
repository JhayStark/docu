import MobileNavbar from '@/components/MobileNavbar';
import React from 'react';
import { useRouter } from 'next/router';
import useSwr from 'swr';
import api from '@/utils/axiosInstance';

const fetcher = url => api.get(url).then(res => res.data);
const Details = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading } = useSwr(
    `api/interventions/all_interventions/${id}`,
    fetcher
  );

  return (
    <div>
      <div className='px-5 pb-28 lg:px-48'>
        <h1 className='mt-16 mb-12'>File of {data?.patient}</h1>
        <div className='flex flex-row items-center'>
          <div className='w-12 h-12 mr-2 bg-red-500 bg-center bg-cover rounded-full' />
          <p>Male</p>
        </div>
        <div className='flex flex-col gap-3 pt-4 '>
          <div className='flex flex-col gap-2'>
            <label htmlFor='patientName'>Patient name:</label>
            <input
              type='text'
              id='patientName'
              name='patientName'
              className='px-5 py-3 focus:outline-none bg-[#F0F0F0] placeholder:text-black'
              placeholder={data?.patient || 'John Doe'}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='interventionLocation'>
              Where Did You Record This Intervention
            </label>
            <input
              type='text'
              id='interventionLocation'
              name='interventionLocation'
              className='px-5 py-3 focus:outline-none bg-[#F0F0F0] placeholder:text-black'
              placeholder={'Randy, Spintex'}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='interventionLocation'>
              When Did You Record This Intervention
            </label>
            <input
              type='text'
              id='interventionDate'
              name='interventionDate'
              className='px-5 py-3 focus:outline-none bg-[#F0F0F0] placeholder:text-black'
              placeholder={
                data?.created_date.split('T')[0] || '20th January 2023'
              }
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='interventionLocation'>Medications Involved</label>
            <input
              type='text'
              id='interventionLocation'
              name='interventionLocation'
              className='px-5 py-3 focus:outline-none bg-[#F0F0F0] placeholder:text-black'
              placeholder={data?.medications || 'Paracetamol'}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='interventionLocation'>
              What was your Intervention
            </label>
            <input
              type='text'
              id='interventionLocation'
              name='interventionLocation'
              className='px-5 py-3 focus:outline-none bg-[#F0F0F0] placeholder:text-black'
              placeholder={data?.proposed_intervention || 'Change Medication'}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='interventionLocation'>Provide More Details</label>
            <textarea
              name='moreDetails'
              id='moreDetails'
              cols='30'
              rows='10'
              className='w-full h-36 bg-[#F0F0F0] placeholder:text-black px-5 py-3'
              placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
            ></textarea>
          </div>
        </div>
      </div>
      <MobileNavbar />
    </div>
  );
};

export default Details;

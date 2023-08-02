import Link from 'next/link';
import React from 'react';
import { FiFolder } from 'react-icons/fi';

const InterventionMainCard = ({ name, id, condition }) => {
  return (
    <div className='p-4 space-y-5 text-xs leading-tight rounded-lg shadow-lg lg:p-3 text-stone-400'>
      <div>
        <div className='flex items-center justify-between '>
          <div className='flex flex-row items-center'>
            <img src='/images/pill.png' className='w-10 h-10' />
            <div className='mx-3'>
              <div className='p-1 text-lg font-medium text-neutral-800'>
                {name}
              </div>
              <div>{condition}</div>
            </div>
          </div>
          <div>
            <Link href={`/interventions/${id}`}>
              <FiFolder className='text-[#0146E9]  text-2xl md:text-2xl ' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterventionMainCard;

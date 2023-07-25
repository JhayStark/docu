import Link from 'next/link';
import { FiFolder } from 'react-icons/fi';

const PatientCard = ({ name, id, age, gender, phoneNumber }) => {
  return (
    <div className='p-4 space-y-5 text-xs leading-tight rounded-lg shadow-lg lg:p-3 text-stone-400'>
      <div>
        <div className='flex items-center justify-between '>
          <div className='flex flex-row'>
            <img src='/images/avatar.svg' />
            <div className='flex flex-col justify-between ml-3'>
              <div className='px-1 text-lg font-medium text-neutral-800'>
                {name}
              </div>
              <div className='flex flex-row gap-2 px-1 text-sm text-neutral-500'>
                <p>{age} years ,</p>
                <p>{gender}</p>
              </div>
              <div className='px-1 text-sm text-neutral-500'>
                <p>{phoneNumber}</p>
              </div>
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

export default PatientCard;

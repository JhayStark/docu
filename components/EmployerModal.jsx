import api from '@/utils/axiosInstance';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { useForm } from 'react-hook-form';

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
      <div className='w-[80%] lg:w-[40%] xl:w-[30%] bg-white p-5 shadow-xl  '>
        <div className='flex flex-row items-center justify-between mb-3'>
          <h2 className='text-lg font-medium '>Employer Details</h2>
          <IoCloseCircleOutline
            onClick={() => setEmployerModal(false)}
            className='text-2xl text-red-400'
          />
        </div>
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
            className='py-4 text-lg border-b-[1px] px-2 rounded-md focus:outline-none '
            {...register('placeOfWork')}
          />
          <input
            type='text'
            placeholder='Employer Location'
            className='px-2 py-4 text-lg rounded-md border-b-[1px] focus:outline-none'
            {...register('location')}
          />
          <input
            type='text'
            placeholder='Employer Category'
            className='px-2 py-4 text-lg rounded-md border-b-[1px] focus:outline-none'
            {...register('category')}
          />

          <button
            type='submit'
            className='p-2 mt-4 text-green-400 font-medium  border-[1px] '
          >
            Add Employer
          </button>
        </form>
      </div>
    </div>
  );
};
export default EmployerModal;

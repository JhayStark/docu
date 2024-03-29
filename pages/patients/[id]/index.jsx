import InterventionMainCard from '@/components/InterventionMainCard';
import Layout from '@/components/Layout';
import useSwr from 'swr';
import api from '@/utils/axiosInstance';
import { useRouter } from 'next/router';
import AddIntervention from '@/public/svgs/AddInterventionIcon';
import Link from 'next/link';

const fetcher = url => api.get(url).then(res => res.data.results);
const profileFetcher = url => api.get(url).then(res => res.data);

const PatientDetails = () => {
  const router = useRouter();
  const { data, error, isLoading } = useSwr(
    `/api/interventions/all_interventions/?patient__id=${router.query.id}`,
    fetcher
  );
  const { data: profile } = useSwr(
    `/api/interventions/all_patients/${router.query.id}`,
    profileFetcher
  );

  return (
    <Layout>
      <div className='sticky top-0 py-1 bg-white'>
        <div className='flex flex-row items-center justify-between mb-5 bg-white '>
          <div className='flex flex-row items-center gap-5'>
            <img src='/images/avatar.svg' />
            <div>
              <p className='text-lg'>{`${profile?.first_name} ${profile?.last_name}, ${profile?.gender}`}</p>
              <p>{profile?.age} years</p>
            </div>
          </div>
          <Link href={`/patients/${router.query.id}/new-intervention`}>
            <div className=' hidden lg:flex flex-row md:text-2xl items-center gap-2 text-[#0146E9] self-end '>
              <AddIntervention />
              <p>Add Intervention</p>
            </div>
          </Link>
        </div>
        <Link href={`/patients/${router.query.id}/new-intervention`}>
          <div className='flex lg:hidden flex-row md:text-2xl items-center gap-2 text-[#0146E9] self-end '>
            <AddIntervention />
            <p>Add Intervention</p>
          </div>
        </Link>
      </div>
      <div className='grid grid-cols-1 gap-3 pt-2 pb-5 md:grid-cols-2'>
        {data && data.length > 0
          ? data?.map(intervention => (
              <InterventionMainCard
                key={intervention.id}
                condition={intervention.pharmaceutical_details}
                id={intervention.id}
                name={intervention.pharmaceutical_care}
              />
            ))
          : !isLoading && (
              <div className='h-[80vh]  md:col-span-2 flex flex-col justify-center items-center'>
                <div>
                  <p className='mb-3 text-xl text-center'>
                    No Interventions created
                  </p>
                  <p className='text-sm text-center text-gray-400 '>
                    + Add Intervention
                  </p>
                </div>
              </div>
            )}
      </div>
    </Layout>
  );
};

export default PatientDetails;

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
      <div className='flex flex-row items-center justify-between mb-5'>
        <div className='flex flex-row items-center gap-5'>
          <img src='/images/avatar.svg' />
          <div>
            <p className='text-xl'>{`${profile?.first_name} ${profile?.last_name}, ${profile?.gender}`}</p>
            <p>{profile?.age} years</p>
          </div>
        </div>
        <Link href={`/patients/${router.query.id}/new-intervention`}>
          <div className='flex flex-row md:text-2xl items-center gap-2 text-[#0146E9] self-end '>
            <AddIntervention />
            <p>Add Intervention</p>
          </div>
        </Link>
      </div>
      <div className='grid grid-cols-1 gap-3 py-5 md:grid-cols-2'>
        {data?.map(intervention => (
          <InterventionMainCard
            key={intervention.id}
            condition={intervention.pharmaceutical_details}
            id={intervention.id}
            name={intervention.pharmaceutical_care}
          />
        ))}
      </div>
    </Layout>
  );
};

export default PatientDetails;

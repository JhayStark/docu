import InterventionMainCard from '@/components/InterventionMainCard';
import AddIntervention from '@/public/svgs/AddInterventionIcon';
import Link from 'next/link';
import useSwr from 'swr';
import api from '@/utils/axiosInstance';
import Layout from '@/components/Layout';

const fetcher = url => api.get(url).then(res => res.data.results);

const Index = () => {
  const { data, error, isLoading } = useSwr(
    '/api/interventions/all_interventions/',
    fetcher
  );
  return (
    <Layout>
      <Link href={'/interventions/new'}>
        <div className='flex flex-row md:text-2xl items-center gap-2 text-[#0146E9] self-end '>
          <AddIntervention />
          <p>Add Intervention</p>
        </div>
      </Link>
      <div className='grid grid-cols-1 gap-3 py-5 md:grid-cols-2'>
        {data?.map(intervention => (
          <InterventionMainCard
            key={intervention.id}
            condition={intervention.pharmaceutical_details}
            date={intervention.created_date.split('T')[0]}
            id={intervention.id}
            name={intervention.patient}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Index;

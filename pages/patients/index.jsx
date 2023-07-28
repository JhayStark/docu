import AddIntervention from '@/public/svgs/AddInterventionIcon';
import Link from 'next/link';
import useSwr from 'swr';
import api from '@/utils/axiosInstance';
import Layout from '@/components/Layout';
import PatientCard from '@/components/PatientCard';

const fetcher = url => api.get(url).then(res => res.data.results);

const Index = () => {
  const { data, error, isLoading } = useSwr(
    '/api/interventions/all_patients/?limit=20&offset=0',
    fetcher
  );
  return (
    <Layout>
      <Link href={'/patients/new'}>
        <div className='flex flex-row md:text-2xl items-center gap-2 text-[#0146E9] self-end '>
          <AddIntervention />
          <p>Add Patient</p>
        </div>
      </Link>
      <div className='grid grid-cols-1 gap-3 py-5 md:grid-cols-2'>
        {data?.map(patient => (
          <PatientCard
            key={patient.id}
            age={patient.age}
            id={patient.id}
            name={`${patient.first_name} ${patient.last_name}`}
            gender={patient.gender}
            phoneNumber={patient.phone_number}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Index;

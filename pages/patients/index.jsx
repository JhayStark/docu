import AddIntervention from '@/public/svgs/AddInterventionIcon';
import Link from 'next/link';
import useSwr from 'swr';
import api from '@/utils/axiosInstance';
import Layout from '@/components/Layout';
import PatientCard from '@/components/PatientCard';
import { useState, useEffect } from 'react';

const fetcher = url => api.get(url).then(res => res.data.results);

const Index = () => {
  const [patientSearch, setPatientSearch] = useState('');
  const [patientSearchInput, setPatientSearchInput] = useState('');
  const { data, error, isLoading } = useSwr(
    `/api/interventions/all_patients/?limit=20&offset=0&search=${patientSearch}`,
    fetcher
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setPatientSearch(patientSearchInput);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [patientSearchInput, 500]);
  return (
    <Layout>
      <div className='flex flex-row items-center justify-between '>
        <Link href={'/patients/new'}>
          <div className='flex flex-row md:text-2xl items-center gap-2 text-[#0146E9] self-end '>
            <AddIntervention />
            <p>Add Patient</p>
          </div>
        </Link>
        <input
          type='text'
          placeholder='Search patient name'
          className='border-[1px] w-[40%] py-1 px-2 rounded-md focus:outline-none'
          onChange={e => setPatientSearchInput(e.target.value)}
          value={patientSearchInput}
        />
      </div>
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

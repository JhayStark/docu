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
      <div className='sticky top-0 flex flex-row items-center justify-between py-1 bg-white'>
        <Link href={'/patients/new'}>
          <div className='flex flex-row md:text-2xl items-center gap-2 text-[#0146E9] self-end '>
            <AddIntervention />
            <p>Add Patient</p>
          </div>
        </Link>
        <input
          type='text'
          placeholder='Search patient'
          className='px-2 w-[50%] lg:w-[30%] border-b-[1px] py-1  text-right focus:outline-none'
          onChange={e => setPatientSearchInput(e.target.value)}
          value={patientSearchInput}
        />
      </div>
      <div className='grid grid-cols-1 gap-3 py-5 md:grid-cols-2'>
        {data && data.length > 0
          ? data?.map(patient => (
              <PatientCard
                key={patient.id}
                age={patient.age}
                id={patient.id}
                name={`${patient.first_name} ${patient.last_name}`}
                gender={patient.gender}
                phoneNumber={patient.phone_number}
              />
            ))
          : !isLoading && (
              <div className='h-[80vh] md:col-span-2 flex flex-col justify-center items-center'>
                <div>
                  <p className='mb-3 text-xl text-center'>
                    No Patients created
                  </p>
                  <p className='text-sm text-center text-gray-400'>
                    + Add Patient
                  </p>
                </div>
              </div>
            )}
      </div>
    </Layout>
  );
};

export default Index;

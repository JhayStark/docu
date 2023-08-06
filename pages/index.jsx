import dynamic from 'next/dynamic';
import AddIntervention from '@/public/svgs/AddInterventionIcon';
import PatientsIcon from '@/public/svgs/PatientsIcon';
import Link from 'next/link';
import Layout from '@/components/Layout';
import useSwr from 'swr';
import api from '@/utils/axiosInstance';
import { FiFolder } from 'react-icons/fi';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { AuthContext } from '@/context/AuthProvider';
import { useContext } from 'react';

const ComponentWithNoSSR = dynamic(() => import('../components/DataTable'), {
  ssr: false,
});

const data = [
  {
    name: 'Jan',
    uv: 0,
    pv: 0,
    amt: 0,
  },
  {
    name: 'Feb',
    uv: 0,
    pv: 0,
    amt: 0,
  },
  {
    name: 'Mar',
    uv: 0,
    pv: 0,
    amt: 0,
  },
  {
    name: 'Apr',
    uv: 0,
    pv: 0,
    amt: 0,
  },
  {
    name: 'May',
    uv: 0,
    pv: 0,
    amt: 0,
  },
  {
    name: 'Jun',
    uv: 0,
    pv: 0,
    amt: 0,
  },
  {
    name: 'Jul',
    uv: 0,
    pv: 0,
    amt: 0,
  },
  {
    name: 'Aug',
    uv: 0,
    pv: 0,
    amt: 0,
  },
  {
    name: 'Sep',
    uv: 0,
    pv: 0,
    amt: 0,
  },
  {
    name: 'Oct',
    uv: 0,
    pv: 0,
    amt: 0,
  },
  {
    name: 'Nov',
    uv: 0,
    pv: 0,
    amt: 0,
  },
  {
    name: 'Dec',
    uv: 0,
    pv: 0,
    amt: 0,
  },
];

const columns = [
  {
    name: 'Patient Name',
    selector: row => row['first_name'],
    sortable: true,
  },
  {
    name: 'Gender',
    selector: row => row.gender,
    sortable: true,
  },
  {
    name: 'Action',
    selector: row => (
      <Link href={`/patients/${row.id}`}>
        <FiFolder className='text-[#0146E9] text-xl md:text-2xl' />
      </Link>
    ),
    sortable: false,
  },
];

const fetcher = url => api.get(url).then(res => res.data);

const Index = () => {
  const { userData } = useContext(AuthContext);
  const { data: tableData } = useSwr(
    `/api/interventions/all_patients/?limit=5&offset=0`,
    fetcher
  );

  return (
    <Layout>
      <section
        id='topSection'
        className='flex flex-row items-center justify-between '
      >
        <div className='flex flex-col items-start'>
          <h2 className='text-lg md:text-2xl'>Hi {`${userData.firstName}`}</h2>
          <h1 className='text-2xl font-bold md:text-3xl'></h1>
        </div>
        <Link href='/interventions/new'>
          <div className='flex flex-row md:text-2xl items-center gap-2 text-[#0146E9] hover:opacity-70'>
            <AddIntervention />
            <p>Add Intervention</p>
          </div>
        </Link>
      </section>
      <section className='flex flex-row justify-between mb-5 text-white md:h-28'>
        <div className='flex flex-row gap-2 rounded-md bg-[#0146E9] w-[51%] md:w-[48%] md:justify-evenly py-5 px-2  items-center'>
          <PatientsIcon />
          <div className='flex flex-col items-center'>
            <h2 className='text-sm md:text-xl'>Patients Impacted</h2>
            <h2 className='font-bold md:text-xl'>{tableData?.count}</h2>
          </div>
        </div>
        <div className='flex flex-row gap-3 rounded-md bg-[#FF6332] w-[47%] md:w-[48%] md:justify-evenly py-5 px-2  items-center'>
          <PatientsIcon />
          <div className='flex flex-col items-center'>
            <h2 className='text-sm md:text-xl'>Interventions</h2>
            <h2 className='font-bold md:text-xl'>25</h2>
          </div>
        </div>
      </section>
      <section className='w-full mb-16 h-60 md:h-80'>
        <div className='flex flex-row justify-between'>
          <h1 className='font-medium md:text-3xl'>Interventions</h1>
          <select name='' id='' className='bg-transparent focus:outline-none'>
            <option value=''>Year</option>
            <option value=''>Month</option>
            <option value=''>Week</option>
          </select>
        </div>
        <ResponsiveContainer width='100%' height='100%'>
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey='name' />

            <Tooltip />
            <Area
              type='monotone'
              dataKey='uv'
              stroke='#8884d8'
              fill='#8884d8'
            />
          </AreaChart>
        </ResponsiveContainer>
      </section>
      <section className='mt-5 mb-5'>
        <ComponentWithNoSSR columns={columns} dataSource={tableData?.results} />
      </section>
    </Layout>
  );
};

export default Index;

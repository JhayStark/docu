import DataTableComponent from "@/components/DataTable";
import InterventionCard from "@/components/InterventionCard";
import MobileNavbar from "@/components/MobileNavbar";
import AddIntervention from "@/public/svgs/AddInterventionIcon";
import PatientsIcon from "@/public/svgs/PatientsIcon";
import Link from "next/link";
import { FiFolder } from "react-icons/fi";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import dynamic from "next/dynamic";

const ComponentWithNoSSR = dynamic(() => import("../../components/DataTable"), {
  ssr: false,
});

const data = [
  {
    name: "Jan",
    uv: 0,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 300,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 600,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 800,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1500,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 2000,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    uv: 2400,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Aug",
    uv: 2800,
    pv: 6300,
    amt: 1800,
  },
  {
    name: "Sep",
    uv: 3200,
    pv: 7300,
    amt: 1900,
  },
  {
    name: "Oct",
    uv: 3800,
    pv: 8500,
    amt: 2200,
  },
  {
    name: "Nov",
    uv: 4500,
    pv: 10000,
    amt: 2600,
  },
  {
    name: "Dec",
    uv: 5500,
    pv: 12000,
    amt: 3000,
  },
];

const columns = [
  {
    name: "Patient Name",
    selector: (row) => row.patientName,
    sortable: true,
  },
  {
    name: "Date",
    selector: (row) => row.recordedDate,
    sortable: true,
  },
  {
    name: "Action",
    selector: (row) => (
      <Link href={`/user/${row.id}`}>
        <FiFolder className="text-[#0146E9] text-xl md:text-2xl" />
      </Link>
    ),
    sortable: false,
  },
];

const dataSource = [
  {
    id: 1,
    recordedDate: "8/10/2022",
    patientName: "Dari Gemmill",
    interventionName: "Comedy|Drama|Romance",
    pharmaceuticalCare: "Drama|Romance",
    interventions: "Comedy|Drama",
    company: "Mybuzz",
  },
  {
    id: 2,
    recordedDate: "2/17/2023",
    patientName: "Thacher Richter",
    interventionName: "Action|Adventure|Drama|Romance|Western",
    pharmaceuticalCare: "Comedy",
    interventions: "Comedy|Drama|Romance",
    company: "Zava",
  },
  {
    id: 3,
    recordedDate: "9/30/2022",
    patientName: "Frederich Derdes",
    interventionName: "Comedy",
    pharmaceuticalCare: "Action|Sci-Fi",
    interventions: "Comedy",
    company: "Eayo",
  },
  {
    id: 4,
    recordedDate: "10/19/2022",
    patientName: "Arnie Spires",
    interventionName: "Documentary|Drama|Musical",
    pharmaceuticalCare: "(no genres listed)",
    interventions: "Drama|War",
    company: "Shufflester",
  },
  {
    id: 5,
    recordedDate: "10/1/2022",
    patientName: "Whittaker Kamena",
    interventionName: "Drama",
    pharmaceuticalCare: "Documentary",
    interventions: "Drama",
    company: "Trilith",
  },
];

const Index = () => {
  return (
    <div>
      <div id="pageContainer" className="flex flex-col gap-5 p-3 lg:px-36 ">
        <section
          id="topSection"
          className="flex flex-row items-center justify-between "
        >
          <div className="flex flex-col items-start">
            <h2 className="text-lg md:text-2xl">Hello</h2>
            <h1 className="text-2xl font-bold md:text-3xl">John Doe</h1>
          </div>
          <div className="flex flex-row md:text-2xl items-center gap-2 text-[#0146E9]">
            <AddIntervention />
            <p>Add Intervention</p>
          </div>
        </section>
        <section className="flex flex-row justify-between text-white md:h-28">
          <div className="flex flex-row gap-2 rounded-md bg-[#0146E9] w-[51%] md:w-[48%] md:justify-evenly py-5 px-2  items-center">
            <PatientsIcon />
            <div className="flex flex-col items-center">
              <h2 className="md:text-xl">Patients Impacted</h2>
              <h2 className="font-bold md:text-xl">25</h2>
            </div>
          </div>
          <div className="flex flex-row gap-3 rounded-md bg-[#FF6332] w-[47%] md:w-[48%] md:justify-evenly py-5 px-2  items-center">
            <PatientsIcon />
            <div className="flex flex-col items-center">
              <h2 className="md:text-xl">Interventions</h2>
              <h2 className="font-bold md:text-xl">25</h2>
            </div>
          </div>
        </section>
        <section className="w-full h-60 md:h-80">
          <div className="flex flex-row justify-between">
            <h1 className="font-medium md:text-3xl">Interventions</h1>
            <select name="" id="" className="bg-transparent">
              <option value="">Year</option>
              <option value="">Month</option>
              <option value="">Week</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height="100%">
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
              <XAxis dataKey="name" />

              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </ResponsiveContainer>
        </section>
        <section className="mt-5">
          <ComponentWithNoSSR columns={columns} dataSource={dataSource} />
        </section>
        <section className="">
          <div className="flex flex-row justify-between">
            <h2 className="font-bold">Reviews</h2>
            <div className="flex flex-row items-center gap-2">
              <AddIntervention />
              <h2>Add review</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 px-1 py-5 pb-20">
            <InterventionCard />
            <InterventionCard />
            <InterventionCard />
            <InterventionCard />
            <InterventionCard />
            <InterventionCard />
            <InterventionCard />
            <InterventionCard />
            <InterventionCard />
            <InterventionCard />
            <InterventionCard />
          </div>
        </section>
      </div>

      <MobileNavbar />
    </div>
  );
};

export default Index;

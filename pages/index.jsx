import { PureComponent } from "react";
import { FaHandsHelping } from "react-icons/fa";
import { BsPersonVideo3 } from "react-icons/bs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Link from "next/link";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-5xl ">Hello, John Doe</h1>
        <div className="flex flex-col gap-2">
          <div className="flex w-full gap-3">
            <div className="flex flex-col gap-2">
              <Link
                href="/addIntervention"
                className=" text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Add Intervention
              </Link>

              <div className="flex flex-col justify-around h-24 px-5 py-2 bg-white rounded shadow-xl md:w-96">
                <h1 className="text-lg font-medium">Interventions</h1>
                <div className="flex flex-row items-center justify-between">
                  <p className="text-3xl">1</p>
                  <FaHandsHelping className="text-3xl text-blue-600" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Link
                href="/reviewMyDay"
                className="text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Review My Day
              </Link>
              <div className="flex flex-col justify-around h-24 px-5 py-2 bg-white rounded shadow-xl md:w-96">
                <h1 className="text-lg font-medium">Patients Impacted</h1>
                <div className="flex flex-row items-center justify-between">
                  <p className="text-3xl ">1</p>
                  <BsPersonVideo3 className="text-3xl text-blue-600" />
                </div>
              </div>
            </div>
          </div>
          <div className="px-3 py-2 bg-white shadow-xl h-80 md:h-full md:w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
}

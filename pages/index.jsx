import { PureComponent } from "react";
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
          <h1 className="text-2xl">My Impact</h1>
          <div className="flex gap-3">
            <div className="flex flex-col gap-2">
              <button className="w-40 p-2 text-white bg-blue-400 rounded">
                Add Intervention
              </button>
              <div className="flex flex-col justify-around h-24 px-5 py-2 bg-white border-2 border-gray-300 rounded md:w-96">
                <h1 className="text-lg">Interventions</h1>
                <p className="text-3xl">1</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <button className="w-40 p-2 text-white bg-blue-400 rounded">
                Review My Day
              </button>
              <div className="flex flex-col justify-around h-24 px-5 py-2 bg-white border-2 border-gray-300 rounded md:w-96">
                <h1 className="text-lg">Patients Impacted</h1>
                <p className="text-3xl">1</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 w-80 h-80 md:w-4/5">
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
    </>
  );
}

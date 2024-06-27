"use client";
import React from "react";
import {
  LineChart,
  Line,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 2500,
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

const ChartWidget = () => {
  return (
    <div className="w-full h-full overflow-hidden rounded-3xl shadow-md">
      <div className="p-4 flex items-start justify-between">
        <div>
        <h3 className="text-3xl font-bold">$1,386.80</h3>
        <p className="text-xl text-slate-800 font-medium">PTO Liability</p>
        </div>
        <div><h2 className=" text-xl text-[#0EF8A9] font-bold">+27.32%</h2></div>
      </div>
      <LineChart width={450} height={150} data={data}>
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    </div>
  );
};

export default ChartWidget;

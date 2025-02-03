import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { chartData } from "./Images/link";
import { Legend } from "@headlessui/react";

const TransitionChart = () => {
  const data = [
    { name: "Male", value: 540 },
    { name: "Female", value: 620 },
    { name: "Other", value: 210 },
  ];

  return (
    <div className=" pt-3 pl-8 h-[300px] flex flex-row gap-3 pb-3">
      <div className="flex flex-col items-center p-5 border rounded-md shadow-md duration-200 transition ease-in-out hover:translate-y-1   hover:pb-3 overflow-hidden">
        <strong className="pb-4">Transtions</strong>
        <BarChart width={790} height={190} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" version={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Expense" fill="#8884d8" />
          <Bar dataKey="Income" fill="#82ca9d" />
        </BarChart>
      </div>

      {/* second div */}

      <div className=" w-[300px] flex flex-col items-center justify-start p-5 border rounded-md shadow-md duration-200 transition ease-in-out hover:translate-y-1 hover:scale-105 overflow-hidden " >
        <strong className="">Buyer Profile</strong>

        <PieChart width={730} height={250}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#8884d8"
          />
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#82ca9d"
            label
          />
        </PieChart>
      </div>
    </div>
  );
};

export default TransitionChart;

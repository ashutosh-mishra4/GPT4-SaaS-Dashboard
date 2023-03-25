import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DealsChart = () => {
  const [filter, setFilter] = useState("weekly");

  const data = [
    { date: "3 Aug", value: 50 },
    { date: "10 Aug", value: 120 },
    { date: "17 Aug", value: 100 },
    { date: "24 Aug", value: 200 },
  ];

  return (
    <div className="w-1/3 h-2/5 p-4 bg-white shadow rounded-md ml-6 mt-4">
      {" "}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Deals</h2>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border-2 border-indigo-500 text-indigo-500 py-1 px-3 rounded-md"
        >
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={[0, 200]} />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DealsChart;

import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const TaskChart = () => {
  const [filter, setFilter] = useState("This week");

  const data = [
    { name: "Completed", value: 60 },
    { name: "Active", value: 30 },
    { name: "Ended", value: 10 },
  ];

  const COLORS = ["#4caf50", "#ff9800", "#f44336"];

  return (
    <div className="w-96 h-96 p-4 bg-white shadow rounded-md ml-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Tasks</h2>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border-2 border-indigo-500 text-indigo-500 py-1 px-3 rounded-md"
        >
          <option value="This week">This week</option>
          <option value="This month">This month</option>
          <option value="This year">This year</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label={(entry) => `${entry.value}%`}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TaskChart;

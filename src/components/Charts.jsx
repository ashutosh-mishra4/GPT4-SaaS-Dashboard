import React from "react";
import DealsChart from "./DealsChart";
import TaskChart from "./TaskChart";

const Charts = () => {
  return (
    <div className="w-6/10 h-full flex flex-col">
      <div className="flex-1">
        <DealsChart />
      </div>
      <div className="flex-1">
        <TaskChart />
      </div>
    </div>
  );
};

export default Charts;

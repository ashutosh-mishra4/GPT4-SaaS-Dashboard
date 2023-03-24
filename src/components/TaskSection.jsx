import React from "react";
import TaskLists from "./TaskLists";

const TaskSection = () => {
  const totalTasks = 10;
  const completedTasks = 8;
  const progressPercentage = (completedTasks / totalTasks) * 100;

  const currentDate = new Date();
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const weekDaysFull = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const getUpcomingDays = () => {
    let days = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(currentDate);
      day.setDate(currentDate.getDate() + i);
      days.push(day);
    }
    return days;
  };

  const upcomingDays = getUpcomingDays();
  return (
    <div className="p-4 w-3/5">
      <div className="flex justify-between items-center">
        <p className="text-lg font-semibold">
          {completedTasks} tasks completed out of {totalTasks}
        </p>
        <select className="border rounded-md p-2">
          <option>This week</option>
          <option>This month</option>
          <option>This year</option>
        </select>
      </div>
      <div className="mt-4 h-6 relative">
        <div
          className="absolute inset-0 bg-gray-300 rounded-md"
          style={{ width: progressPercentage + "%", height: "6px" }}
        ></div>
        <div
          className="absolute inset-0 bg-green-500 rounded-md"
          style={{ width: progressPercentage + "%", height: "6px" }}
        ></div>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold mb-4">
          {weekDaysFull[currentDate.getDay()]}, {currentDate.toDateString()}
        </h2>
        <ul className="flex justify-between">
          {upcomingDays.map((day, index) => (
            <li key={index} className="text-center">
              <span className="block text-lg font-semibold">
                {weekDays[day.getDay()]}
              </span>
              <span className="text-gray-600">{day.getDate()}</span>
            </li>
          ))}
        </ul>
      </div>
      <TaskLists />
    </div>
  );
};

export default TaskSection;

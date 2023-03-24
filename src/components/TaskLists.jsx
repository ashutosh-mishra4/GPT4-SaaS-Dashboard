import React from "react";

const TaskLists = () => {
  const tasks = [
    {
      title: "Design new landing page",
      tag: "Design",
      dueDate: "2023-03-30",
      assignedTo: "Alice",
      imgSrc: "https://i.pravatar.cc/50?u=alice",
      status: "Completed",
    },
    {
      title: "Complete the blog post",
      tag: "Writing",
      dueDate: "2023-04-10",
      assignedTo: "Alice",
      imgSrc: "https://i.pravatar.cc/50?u=alice",
      status: "Active",
    },
    {
      title: "Addend the meeting",
      tag: "Reminder",
      dueDate: "2023-03-23",
      assignedTo: "Alice",
      imgSrc: "https://i.pravatar.cc/50?u=alice",
      status: "Ended",
    },
    // Add more tasks here...
  ];

  return (
    <div className="mt-8">
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
      <button className="mt-4 bg-indigo-500 text-white font-semibold py-2 px-4 rounded-full mx-auto block">
        Show More
      </button>
    </div>
  );
};

const TaskCard = ({ task }) => {
  const statusColors = {
    Completed: "bg-green-500",
    Active: "bg-yellow-500",
    Ended: "bg-red-500",
  };

  return (
    <div className="relative p-4 mb-4 bg-white shadow rounded-md">
      <div className="absolute top-0 right-0 mt-2 mr-4 text-indigo-500 font-semibold text-sm">
        {task.tag}
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{task.title}</h3>
          <p className="text-gray-600">Due: {task.dueDate}</p>
          <div className="flex items-center mt-2">
            <img
              src={task.imgSrc}
              alt={task.assignedTo}
              className="h-8 w-8 rounded-full mr-2"
            />
            <span>{task.assignedTo}</span>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="h-8"></div>
          <button
            className={`py-2 px-4 rounded-md text-white ${
              statusColors[task.status]
            }`}
          >
            {task.status}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskLists;

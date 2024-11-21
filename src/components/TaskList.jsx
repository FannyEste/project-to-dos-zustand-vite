import React from "react";
import TaskItem from "./TaskItem";
import useTaskStore from "../store/taskStore";

const TaskList = () => {
  const tasks = useTaskStore((state) => state.tasks) || []; 

  return (
    <ul className="space-y-2">
      {tasks.length > 0 ? (
        tasks.map((task) => <TaskItem key={task.id} task={task} />)
      ) : (
        <p className="text-gray-500">No tasks available. Add some!</p>
      )}
    </ul>
  );
};

export default TaskList;

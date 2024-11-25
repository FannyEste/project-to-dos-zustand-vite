import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, toggleTask, deleteTask, theme }) => {
  return (
    <ul className="space-y-4">
      {tasks.map((task) => ( //Map over the task array
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask} // Passses Toggle task & deleteTask function
          deleteTask={deleteTask}
          theme={theme}
        />
      ))}
    </ul>
  );
};

export default TaskList;

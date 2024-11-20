import React from 'react';
import useTaskStore from '../store/taskStore;

const TaskItem => ({ task }) => {
    const toggleTask = useTaskStore((state) =>state.toggleTask);
    const removeTask = useTaskStore((state) =state.removeTask);

    return (
        <li
        className={`flex justify-between items-center p-2 boder rounded ${
            task.completed ? 'bg-gray-300 line-through' :'bg-white'
        }`}
        >
            <span
            onClick={() => toggleTask(task.id)}
            className="cursor-pointer"
            >
                {task.title}
            </span>
            <button 
              onClick={() => removeTask(task.id)}
              className="text-red-500"
            >
              Delete
            </button>
        </li>
    );
};

export default TaskItem;

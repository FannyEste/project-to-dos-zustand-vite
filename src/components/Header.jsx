import React from 'react';
import useTaskStore from '../store/taskStore';

const Header = () => {
  const tasks = useTaskStore((state) => state.tasks) || []; 
  const uncompletedCount = tasks.filter((task) => !task.completed).length;

  return (
    <header className="mb-4">
      <h1 className="text-2xl font-bold">Todo App</h1>
      <p>
        {tasks.length} task{tasks.length !== 1 && 's'} (
        {uncompletedCount} uncompleted)
      </p>
    </header>
  );
};

export default Header;

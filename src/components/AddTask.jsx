import React, { useState } from 'react';
import useTaskStore from '../store/taskStore';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const addTask = useTaskStore((state) => state.addTask);

const handleSubmit = (e) => {
  e.preventDefault();
  if (title.trim()) {
    addTask(title);
    setTitle('');
  }
};

return (
  <form onSubmit={handleSubmit} className='flexgap-2'>
    <input
    type="text"
    placeholder="Add a new task"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    className="p-2 border rounded w-full"
    />
    <button
    type="submit"
    className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Add
    </button>
  </form>
 );
};

export default AddTask;

import React, { useState } from 'react';
import useTaskStore from '../store/taskStore';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const addTask = useTaskStore((state) => state.addTask);

export default AddTask;

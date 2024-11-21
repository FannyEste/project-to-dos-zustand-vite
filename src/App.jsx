import React from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import DaysButtons from "./components/DaysButtons";

const App = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <Header />
      <DaysButtons />
      <AddTask />
      <TaskList />
    </div>
  );
};

export default App;

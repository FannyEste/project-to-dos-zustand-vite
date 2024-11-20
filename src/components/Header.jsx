import React from "react";
import useTaskStore from "../store/taskStore";

const Header = () => {
    const task = useTaskStore((state) => state.task);
    const uncompletedCount = tasks.filter((tast) => ! task.completed) .lenght;

    return (
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Todo App</h1>
        <p>
            {task.length} task{task.lenght !== 1 && 's'} (
                {uncompletedCound} uncompleted)
        </p>
      </header>  
    );
};

export default Header;
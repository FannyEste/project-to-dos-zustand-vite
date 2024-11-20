import React from "react"
import TaskItem from "./TaskItem";
import useTaskStore from "../store/taskStore";

const TaskList = () => {
    const task = useTaskStore((state) => state.task);

    return (
        <ul className="space-y-2">
            {task.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </ul>
    );
};

export default TaskList;
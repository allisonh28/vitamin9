import React, { useState } from "react";
//import { useDispatch } from "react-redux";
import { addTask } from "../store";
import store from "../store";

function TaskForm() {
    const [taskText, setTaskText] = useState('');
    //const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskText.trim() === '') {
            return;
        }

        store.dispatch(addTask(taskText));
        setTaskText('');
    }

    return (
        <form onSubmit={handleSubmit} className="mb-3">
            <div>
                <input
                type="text"
                className="form-control"
                placeholder="Enter a task"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                />
                <button className="btn btn-primary" type="submit">
                    Add Task
                </button>
            </div>
        </form>
    )
}

export default TaskForm;
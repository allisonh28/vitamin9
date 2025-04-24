import { useSelector } from "react-redux";
import { deleteTask } from "../store";
import store from "../store";

function TaskList() {
    const tasks = useSelector(state => state.tasks);

    return (
        <ul className="list-group">
            {tasks.map(task => (
                <li key={tasks.id} className="list-group-item">
                    {task.text}
                    <button
                    className="btn btn-danger btn-sm"
                    onClick={() => store.dispatch(deleteTask(task.id))}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;
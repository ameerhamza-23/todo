import '../css/task.css'
import { Trash3Fill } from 'react-bootstrap-icons';
function Task(props) {
    return (
        <div className="container">
            <div className="row task-row">
                <p>{props.title} <span className="icon"><Trash3Fill /></span></p>
            </div>
        </div>
    );
}

export default Task;
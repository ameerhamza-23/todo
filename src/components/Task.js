import '../css/task.css'
import {Trash3Fill} from 'react-bootstrap-icons';
function Task(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <p>{props.title} <span className="icon"><Trash3Fill/></span>  </p>
                </div>
            </div>
        </div>
    );
}

export default Task;
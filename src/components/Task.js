import '../css/task.css'
import { Trash3Fill } from 'react-bootstrap-icons';
import { useTaskContext } from '../hooks/useTaskContext';
function Task(props) {

    const { dispatch } = useTaskContext();
    const handleDelete = async(e)=> {
        const response = await fetch('/api/todo/' + props.id,{
            method:'DELETE'
        })

        const json = await response.json();
        if(!response.ok) {
            console.log('error')
        }
        else {
            dispatch({type:'DELETE_TASK', payload: json })
        }
    }
    return (
        <div className="container">
            <div className="row task-row">
                <p>{props.title} <button className='trash-btn' onClick={handleDelete}> <span className="icon"><Trash3Fill /></span> </button> </p>
            </div>
        </div>
    );
}

export default Task;
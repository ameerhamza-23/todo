import Task from './Task'
import '../css/main.css'
import {useEffect, useState} from 'react';
import { useTaskContext } from '../hooks/useTaskContext';

function createTask(task) {
    return (
      <Task title={task.title} id={task._id} />
    ); 
}

function Main() {

    // const [tasks, setTasks] = useState(null);
    const { tasks, dispatch } = useTaskContext();

    useEffect(()=> {
        const fetchTasks = async ()=> {
            const response = await fetch('/api/todo/');
            const json = await response.json();
            if(response.ok) {
                // setTasks(json);
                dispatch({type:'SET_TASKS',payload: json});
            }
        }
        fetchTasks();
    }, [])

    return (
         <div className="container">
             <div className="row main-row">
                 <div className="col-6">
                     {tasks && tasks.map(createTask)}
                 </div>
             </div>
         </div>
    );
}

export default Main;
import Task from './Task'
import '../css/main.css'
import {useEffect} from 'react';
import { useTaskContext } from '../hooks/useTaskContext';
import {useNavigate} from 'react-router-dom'

function createTask(task) {
    return (
      <Task title={task.title} id={task._id} key={task._id} />
    ); 
}

function Main() {

    // const [tasks, setTasks] = useState(null);
    const { tasks, dispatch } = useTaskContext();
    let navigate = useNavigate()

    useEffect(()=> {
        const fetchTasks = async ()=> {
            const response = await fetch('/api/todo/',{
                method:'GET',
                headers: {
                    authToken: localStorage.getItem('token')
                }
            });
            const json = await response.json();
            console.log('current user:',localStorage.getItem('token'))
            if(response.ok) {
                // setTasks(json);
                dispatch({type:'SET_TASKS',payload: json});
            }
        }
        if(localStorage.getItem('token')) {
            fetchTasks();
        }
        else {
           navigate('/login')
        }
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
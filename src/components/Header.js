import Date from './Datee'
import '../css/header.css'
import {useState} from 'react';
import { useTaskContext } from '../hooks/useTaskContext';

function toggleAddTask() {
    console.log('Add Task Pressed');
}

function Header() {

    const { tasks, dispatch } = useTaskContext();

    const [title, setTitle] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async(e)=> {
        e.preventDefault();
        const task = {title}
        const response = await fetch('/api/todo',{
            method:'POST',
            body:JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json();
        if(!response.ok) {
            setError(json.error);
        }
        else {
            setError(null);
            setTitle('');
            dispatch({type:'CREATE_TASK', payload: json })
        }
    }

    return (
        <div className='container date-cont'>
            <div className='row header-row'>
                <div className='col-8'>
                    <Date />
                </div>
                <div className='col-4'>
                    <form type="submit" onSubmit={handleSubmit}>
                        <input type='text' onChange={(e)=> {setTitle(e.target.value);}} placeholder='eg. Buy Milk' value = {title}></input>
                        <button type='submit' className='task-btn'>+Task</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Header;
export {toggleAddTask};
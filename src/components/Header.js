import Date from './Datee'
import '../css/header.css'
import {useState} from 'react';
import { useTaskContext } from '../hooks/useTaskContext';
import Spinner from './Spinner'

function toggleAddTask() {
    console.log('Add Task Pressed');
}

function Header() {

    const { tasks, dispatch } = useTaskContext();

    const [title, setTitle] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async(e)=> {
        e.preventDefault();
        const task = {title}
        setLoading(true)
        const response = await fetch('/api/todo',{
            method:'POST',
            body:JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json',
                authToken: localStorage.getItem('token')
            }
        })

        const json = await response.json();
        setLoading(false)
        if(!response.ok) {
            return json({error:"an error occured"});
        }
        else {
            setTitle('')
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
                        {loading ? <Spinner size={25}/> : <button type='submit' className='task-btn'>+Task</button>}
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Header;
export {toggleAddTask};
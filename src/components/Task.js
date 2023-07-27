import '../css/task.css'
import { Trash3Fill } from 'react-bootstrap-icons';
import { useTaskContext } from '../hooks/useTaskContext';
import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Spinner from './Spinner'

function Task(props) {
    const { dispatch } = useTaskContext();
    const [loading,setLoading] = useState(false);

    const handleDelete = async(e)=> {

        e.preventDefault();
        setLoading(true);
        const response = await fetch('/api/todo/' + props.id,{
            method:'DELETE',
            headers: {
                authToken: localStorage.getItem('token')
            }
        })

        const json = await response.json();
        setLoading(false);
        console.log('json after deleting: ',json)
        if(!response.ok) {
            console.log('error')
        }
        else {
            dispatch({type:'DELETE_TASK', payload: json })
        }
    }

    useEffect(() => {
        
    },[])
    
    return (
        <>
        <div className="container">
            <div className="row task-row">
                <p>{props.title} <button className='trash-btn' onClick={handleDelete}> <span className="icon"> {loading ? <Spinner size={17}/> : <Trash3Fill />}</span> </button> </p>
            </div>
        </div>
        </>
    );
}

export default Task;
import { TasksContext } from '../context/taskContext'
import { useContext } from 'react'

export const useTaskContext = () => {
    const context = useContext(TasksContext);
    return context;
}
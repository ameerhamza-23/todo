import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { TasksContextProvider } from './context/taskContext'

ReactDOM.render(
    <TasksContextProvider>
        <App/>
    </TasksContextProvider>
    ,document.getElementById('root')
);

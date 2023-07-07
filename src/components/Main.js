import Task from './Task'
import AddTask from './AddTask'
import arr from './tasks'
import '../css/main.css'

function Main() {

    function createTask(task) {
        return (
          <Task title={task}/>
        ); 
    }

    return (
         <div className="container">
             <div className="row main-row">
                 <div className="col-6">
                     {arr.map(createTask)}
                 </div>
                 <div className="col-6">
                    <AddTask/>
                 </div>
             </div>
         </div>
    );
}

export default Main;
import Navbar from './Navbar';
import Date from './Datee'
import Task from './Task'
import '../css/app.css'
import arr from './tasks'

function App() {

  function createTask(task) {
      return (
        <Task title={task}/>
      ); 
  }

  return (
    <>
      <Navbar/>
      <Date/>
      {arr.map(createTask)}
    </>
  );
}

export default App;

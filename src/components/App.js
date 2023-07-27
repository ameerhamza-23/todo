import Home from '../pages/Home'
import Navbar from '../components/Navbar'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import '../css/app.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;

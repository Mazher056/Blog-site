import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from './pages/Home';
import Navbar from "./Components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from './pages/About';
import Register from './pages/Register';
import Login from './pages/Login';


function App() {

  return (
    <>
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
      </Routes>
    </Router>
   
    </>
  )
}

export default App

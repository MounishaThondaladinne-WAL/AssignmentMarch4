import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom"
import Home from './Home';
import About from './About'
import Contact from './Contact';
import Employee from './Employee';
function App() {
  return (
    <div>
    <div className="Car">
    <h1 className="Heading">CAR RENTAL</h1>
    <BrowserRouter>
    <Link to = "/" className='Link'>Home</Link>
    <Link to = "/about" className='Link'>About</Link>
    <Link to = "/contact" className='Link'>Contact</Link>
    <Link to = "/employee" className='Link'>Employees</Link>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/employee" element={<Employee/>}/>
    </Routes>
    </BrowserRouter>
    </div>
    </div>
  );
}

export default App;

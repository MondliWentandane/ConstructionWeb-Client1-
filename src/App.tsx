import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Services from './pages/Services';
import Project from './pages/Project';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/serviceR' element={<Services />}/>
        <Route path='/projectR'element={<Project />}/>
        <Route path='/contactR' element={<Contact />}/>
        <Route path='/aboutR' element={<AboutUs />}/>
      </Routes>
    </Router>
  )
}

export default App

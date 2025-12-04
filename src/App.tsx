import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Services from './pages/Services';
import Project from './pages/Project';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import ProjectGallary from './pages/ProjectGallary';

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
        <Route path='/projectGallaryR' element={<ProjectGallary />}/>
      </Routes>
    </Router>
  )
}

export default App

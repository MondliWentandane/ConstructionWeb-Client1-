import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'
import Services from './pages/Services';
import Project from './pages/Project';
import Contact from './pages/Contact';
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
        <Route path='/projectGallaryR' element={<ProjectGallary />}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App

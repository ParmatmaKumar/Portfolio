import './App.css'
import Home from "./pages/Home"
import About from "./pages/About"
import Sevices from './pages/Sevices'
import Project from './pages/Project'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Common/Navbar'
import ReviewSliderPage from './Common/ReviewSlider'
import Contact from './pages/Contact'

function App() {


  return (
    <>
      <div >
        <Navbar/> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Sevices />} />
          <Route path="/project" element={<Project />} />
          <Route path="/review" element={<ReviewSliderPage />} />
          <Route path="/contact" element={<Contact/>} />


        </Routes>
        
      </div>



    </>
  )
}

export default App

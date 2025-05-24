import './App.css'
import Button from './components/Button'
import CenteredRectangle from './components/CenteredRectangle'
import NavBar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Code from './pages/Code';
import Games from './pages/Games';
import Art from './pages/Art';
import Contact from './pages/Contact';

function App() {

  return (
    <>
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/code" element={<Code />} />
          <Route path="/games" element={<Games />} />
          <Route path="/art" element={<Art />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App

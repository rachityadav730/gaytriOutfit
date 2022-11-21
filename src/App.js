import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import { Routes, Route } from "react-router-dom"
function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="gallery" element={ <Gallery/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes>
    </div>
  );
}

export default App;

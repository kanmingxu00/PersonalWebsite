import './App.css'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import NotFound from './pages/NotFound.tsx'
import { Canvas } from "@react-three/fiber";


function App() {
  const location = useLocation();
  return (
    
    <div>

      <nav>
        {location.pathname !== "/" && <Link to="/">Home</Link>}
        {location.pathname !== "/about" && <Link to="/about">About</Link>}
      </nav>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} /> {/* Catch-all for 404 */}
    </Routes>
    </div>
  )
}

export default App

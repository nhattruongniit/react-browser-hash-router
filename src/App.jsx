import { Link, Route, Routes } from "react-router-dom";

import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {

  return (
    <>
      <h1>Test Browser & Hash Router</h1>

      <nav>
        <Link to="/" replace>Home</Link> | 
        <Link to="/contact">Contact</Link> |
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  )
}

export default App

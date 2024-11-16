import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/acerca-de" element={<About />}/>
        <Route path="/contactenos" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
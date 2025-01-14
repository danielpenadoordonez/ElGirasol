import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import categories from './data/categories.json';
import galleries from './data/galleries.json';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/acerca-de" element={<About />}/>
        <Route path="/contactenos" element={<Contact />}/>
        <Route path="/:category" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
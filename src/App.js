import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
// import categories from './data/categories.json';
// import galleries from './data/galleries.json';
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/acerca-de" element={<About />}/>
        <Route path="/contactenos" element={<Contact />}/>
        <Route path="/galeria/:category" element={<Gallery />} />
        <Route path="/galeria/:category/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
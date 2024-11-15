import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import About from "./pages/About";
//import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />}/>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/acerca-de" element={<About />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import UserDetails from "./Component/UserDetails";
import Navbar from './Component/Navbar';
import Cards from './Component/Cards';

const RouterFile = () => {
  return (
    <>
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="userName/:id" element={<UserDetails/>} />
          <Route path="userName/:id/Cards" element={<Cards/>} />
        </Routes>
      </Router>
    </>
)
}

export default RouterFile
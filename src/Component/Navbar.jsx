import React from 'react'
import { Link } from "react-router-dom";
import './Nav.css'


const Navbar = () => {
  return (
    <>
        <div className="tags">
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/about">About</Link>
          <Link className="link" to="/contact">Contact</Link>
        </div>
    </>
)
}

export default Navbar
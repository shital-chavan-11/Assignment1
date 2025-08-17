import { useState } from "react";
import "../src/assets/css/Navbar.css";  
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar1">
     
       <div className="logo1">
        <a href="/">Project</a>
      </div>

    
      <div className={`nav-links1 ${isOpen ? "open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

       
      <div className="hamburger1" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Navbar;

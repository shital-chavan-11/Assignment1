import { useState } from "react";
import "../src/assets/css/Navbar.css"; // ✅ make sure you already have Navbar.css

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar1">
      {/* Logo */}
       <div className="logo1">
        <a href="/">Project</a>
      </div>

      {/* Nav Links */}
      <div className={`nav-links1 ${isOpen ? "open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Hamburger (for mobile) */}
      <div className="hamburger1" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Navbar;

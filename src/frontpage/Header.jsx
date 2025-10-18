import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => setShadow(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${shadow ? "sticky-shadow" : ""}`}>
      <div className="container">
        <nav className="navbar header-nav">

          {/* Logo */}
          <NavLink to="/" className="navbar-brand logo">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB8_vIxkf-KYuG9CpPh12hiYdLInXVonNaErdTtwHf7ddc2AqbMoSRnyZSq0frS-GGWNM&usqp=CAU"
              alt="Med Care Logo"
            />
          </NavLink>

          {/* Desktop Menu */}
          <ul className="main-nav">
            <li>
              <NavLink to="/" className="nav-link" end>Home</NavLink>
            </li>
            <li>
              <NavLink to="/" className="nav-link">Overview</NavLink>
            </li>
            <li>
              <NavLink to="/" className="nav-link">Services</NavLink>
            </li>
            <li>
              <NavLink to="/" className="nav-link">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/" className="nav-link">Reviews</NavLink>
            </li>
          </ul>

          {/* Right CTA Button */}
          <div className="header-navbar-rht">
            <NavLink to="/login" className="btn">Register/Login</NavLink>
          </div>

          {/* Hamburger */}
          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <ul className="main-nav">
            <li>
              <NavLink to="/" className="nav-link" end onClick={() => setMenuOpen(false)}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/admin" className="nav-link" onClick={() => setMenuOpen(false)}>Admin Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/doctor" className="nav-link" onClick={() => setMenuOpen(false)}>Doctor Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/patient" className="nav-link" onClick={() => setMenuOpen(false)}>Patient Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/login" className="btn" onClick={() => setMenuOpen(false)}>Register/Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

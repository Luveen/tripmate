import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { motion } from "framer-motion";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/', exact: true },
    { label: 'Destinations', path: '/destinations' },
    { label: 'Book a Trip', path: '/tour-details' },
    { label: 'Experiences', path: '/#gallery' },
    { label: 'Why TripMate', path: '/#why-tripmate' }
  ];

  const checkActive = (itemPath) => {
    const currentPath = location.pathname + location.hash;

    // Exact match check
    if (itemPath === '/') {
      return currentPath === '/';
    }

    // For hash links or sub-pages
    return currentPath === itemPath;
  };

  return (
    <motion.nav
      className={`navbar-custom py-4 position-absolute top-0 start-0 w-100 ${isScrolled ? 'navbar-scrolled' : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ zIndex: 1050 }}
    >
      <div className="container-fluid px-5">
        <div className="d-flex align-items-center justify-content-between w-100">
          {/* Logo */}
          <div className="navbar-logo">
            <Link
              to="/"
              className="text-decoration-none"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="fw-bold mb-0 text-white" style={{ letterSpacing: '-1.5px', fontSize: '2rem' }}>
                  Trip<span style={{ color: '#ff6600' }}>Mate</span>
                </h3>
              </motion.div>
            </Link>
          </div>

          {/* Nav Links Container */}
          <div className="nav-pill-container glass-morphism">
            <ul className="nav align-items-center gap-2">
              {navItems.map((item) => (
                <li className="nav-item" key={item.label}>
                  <NavLink
                    className={`nav-link-pill ${checkActive(item.path) ? 'active' : ''}`}
                    to={item.path}
                  >
                    <motion.span
                      whileHover={{ y: -2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item.label}
                    </motion.span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Book Now Button */}
          <div className="navbar-cta">
            <motion.button
              className="btn-primary-nav d-flex align-items-center gap-3"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,102,0,0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="ps-2">Book Now</span>
              <div className="arrow-circle d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-right"></i>
              </div>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;

import React from "react";
import "./Hero.css";
import { motion } from "motion/react";
import Hero3D from "./Hero3D";
import heroBg from "../assets/imageback.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="d-flex align-items-center justify-content-between px-5 py-5 overflow-hidden position-relative"
      style={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Hero3D />

      {/* Hero Text */}
      <motion.div
        className="hero-text position-relative"
        style={{ zIndex: 2 }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="display-2 fw-bold mb-4 hero-main-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Discover Sri Lanka <br />
          with <span className="shaggy-span glow-text">TripMate</span>
        </motion.h1>
        <motion.p
          className="lead mt-3 text-light-shadow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Plan your perfect journey with trusted local guides and vehicles.
        </motion.p>

        <motion.div
          className="hero-ctas d-flex gap-3 mt-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <motion.button
            className="btn-glossy btn-secondary-custom"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Tours
            <span className="sweep-effect"></span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Hero Content Overlay */}
      <motion.div
        className="hero-overlay-details d-flex flex-column align-items-end position-relative"
        style={{ zIndex: 2 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Supporting Info Panel */}
        <div className="info-panel glass-morphism p-4 rounded-4 mb-4">
          <div className="d-flex align-items-center mb-2">
            <span className="badge bg-warning text-dark me-2">LIVE</span>
            <span className="text-white-50 small">Current Tours Available</span>
          </div>
          <h4 className="text-white mb-2">200+ Travelers Joined</h4>
          <p className="text-light small mb-0">
            From beaches to mountains, explore Sri Lanka your way.
          </p>
        </div>


      </motion.div>
    </section>
  );
}

export default Hero;
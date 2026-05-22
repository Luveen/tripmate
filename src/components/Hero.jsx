import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";
import bannerImg from "../assets/bannernew.jpeg";

function Hero() {
  return (
    <section
      id="home"
      className="d-flex flex-column align-items-center justify-content-center pb-5 overflow-hidden bg-white position-relative"
      style={{
        minHeight: "85vh",
        paddingTop: "120px" // Account for navbar
      }}
    >
      <motion.div
        className="container text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Banner Image */}
        <div className="banner-container position-relative mb-5 mx-auto" style={{ maxWidth: '1400px' }}>
            <img 
                src={bannerImg} 
                alt="TripMate Connecting People" 
                className="img-fluid w-100 banner-img" 
                style={{ 
                    maxHeight: '600px', 
                    objectFit: 'contain'
                }} 
            />
        </div>
        
      </motion.div>
    </section>
  );
}

export default Hero;
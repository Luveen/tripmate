import React, { useEffect, useRef } from "react";
import "./body.css";
import lkMap from "../assets/lk-01.png";
import { CountUp } from "countup.js";
import { motion } from "motion/react";
import SketchDivider from "./SketchDivider";

function Body() {
  const tripsRef = useRef(null);
  const reviewsRef = useRef(null);
  const destinationsRef = useRef(null);
  const statsSectionRef = useRef(null);

  useEffect(() => {
    const startCounters = () => {
      new CountUp(tripsRef.current, 76, { duration: 5 }).start();
      new CountUp(reviewsRef.current, 50, { duration: 5 }).start();
      new CountUp(destinationsRef.current, 76, { duration: 5 }).start();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounters();
            observer.disconnect(); // run once
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsSectionRef.current) observer.observe(statsSectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="container-fluid py-5 overflow-hidden">
      {/* Why TripMate Section - Feature Grid */}
      <section
        id="why-tripmate"
        className="why-tripmate-section mb-5 mt-5 mx-auto px-lg-5"
        style={{ maxWidth: '1400px' }}
      >
        <motion.div
          className="header-container mb-5 text-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-uppercase small fw-bold letter-spacing-2 d-flex align-items-center gap-2 mb-3">
            <i className="bi bi-patch-check-fill" style={{ color: '#ff6600' }}></i> Why TripMate?
          </span>
          <h2 className="display-1 fw-black main-title mb-0">The Excellence.</h2>
          <span className="text-muted fw-medium mt-2 d-block">Behind Your Journey</span>
        </motion.div>

        <div className="row g-4 justify-content-center">
          {[
            {
              title: "10+ Years Experience",
              desc: "A collective decade of island expertise ensuring your trip is handled by professionals who know every corner.",
              icon: "bi-suitcase-lg"
            },
            {
              title: "500+ Successful Trips",
              desc: "A proven track record of creating unforgettable memories for travelers from all around the world.",
              icon: "bi-award"
            },
            {
              title: "Tailored Adventures",
              desc: "We don't do generic. Every itinerary is crafted to match your unique interests and travel rhythm.",
              icon: "bi-compass"
            },
            {
              title: "Safety & Reliability",
              desc: "From certified vehicles to expert local drivers, we prioritize your comfort and safety at every turn.",
              icon: "bi-patch-check"
            }
          ].map((feature, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <motion.div
                className="feature-card p-4 h-100 rounded-4 text-center border border-white border-opacity-10 bg-white bg-opacity-75"
                style={{ backdropFilter: 'blur(10px)' }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="feature-icon-box mb-4 mx-auto d-flex align-items-center justify-content-center rounded-circle" style={{ width: '70px', height: '70px', background: 'rgba(255,102,0,0.1)', color: '#ff6600' }}>
                  <i className={`bi ${feature.icon} fs-2`}></i>
                </div>
                <h4 className="fw-bold mb-3">{feature.title}</h4>
                <p className="text-muted small">{feature.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      <SketchDivider />

      {/* Lucid Adventures Section */}
      <motion.div
        className="lucid-stats-outer mx-auto px-lg-5"
        style={{ maxWidth: '1400px' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="lucid-stats-container position-relative">
          <div className="lucid p-1 p-md-0 d-flex flex-column h-1">

            {/* Header Metadata */}
            <div className="lucid-header mb-5">
              <span className="text-uppercase small fw-bold letter-spacing-2 d-flex align-items-center gap-2 mb-3">
                <i className="bi bi-geo-fill" style={{ color: '#ff6600' }}></i> Adventure Log
              </span>
              <h2 className="display-1 fw-black main-title mb-0">Our Reach.</h2>
              <span className="text-muted fw-medium mt-2 d-block">Tracked Live</span>
            </div>

            <div className="lucid-main-grid mt-4">
              <div className="row align-items-center">
                {/* Stats 2x2 */}
                <div className="col-lg-7">
                  <div className="row g-5" ref={statsSectionRef}>
                    {[
                      { ref: tripsRef, label: "HAPPY TRAVELERS", value: "5000+", unit: "EXPLORERS", sub: "WORLD-WIDE" },
                      { ref: reviewsRef, label: "SATISFACTION RATE", value: "4.9", unit: "/ 5.0", sub: "GUEST RATING" },
                      { ref: destinationsRef, label: "TOUR PACKAGES", value: "25+", unit: "PATH", sub: "UNIQUE TOURS" },
                      { label: "SERVICE RECORD", value: "12+", unit: "YEARS", sub: "HOSPITALITY" }
                    ].map((stat, i) => (
                      <div className="col-6" key={i}>
                        <div className="lucid-stat-box">
                          <span className="lucid-label d-block small opacity-75 fw-bold mb-1">{stat.label}</span>
                          <div className="d-flex align-items-baseline">
                            <span ref={stat.ref} className="lucid-value display-3 fw-bold">
                              {stat.value}
                            </span>
                            <span className="lucid-unit ms-2 small fw-bold opacity-50">{stat.unit}</span>
                          </div>
                          <span className="lucid-sub small opacity-40 d-block mt-1">{stat.sub}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map/Path Highlight - Travelled Route */}
                <div className="col-lg-5 d-flex justify-content-center mt-3 mt-lg-0">
                  <div className="route-map-container position-relative w-100 d-flex flex-column align-items-center">
                    <div className="map-label mb-2 text-uppercase small opacity-50 letter-spacing-2 text-center fw-bold">Last Travelled Route</div>
                    <div className="map-wrapper position-relative w-100" style={{ maxWidth: '320px', aspectRatio: '3/4' }}>
                      {/* Sri Lanka Image Map - Refined Size */}
                      <img
                        src={lkMap}
                        alt="Sri Lanka Map"
                        className="position-absolute top-0 start-0 w-100 h-100 object-fit-contain opacity-100"
                        style={{ filter: 'grayscale(0)' }}
                      />

                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 100 150"
                        fill="none"
                        className="lucid-map-svg position-absolute top-0 start-0 w-100 h-100"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        {/* Route Path (Micro-Precise) */}
                        <motion.path
                          d="M23 108 L25 98 L47 68"
                          stroke="#ff6600"
                          strokeWidth="1"
                          strokeDasharray="2 2"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          transition={{ duration: 2, ease: "easeInOut" }}
                        />

                        {/* End Marker: Sigiriya (Smaller) */}
                        <circle cx="47" cy="68" r="1.5" fill="#ff6600" className="glow-dot" />
                        <text x="51" y="70" fill="#ff6600" fontSize="4" fontWeight="700" className="map-text" style={{ textTransform: 'uppercase' }}>Sigiriya</text>
                        <text x="51" y="64" fill="#ff6600" fontSize="2.5" className="map-text opacity-75 fw-bold" style={{ textTransform: 'uppercase' }}>Destination</text>

                        {/* Start Marker: Colombo (Smaller) */}
                        <circle cx="23" cy="108" r="1.5" fill="#ff6600" className="glow-dot" />
                        <text x="19" y="110" fill="#ff6600" fontSize="4" fontWeight="700" className="map-text" textAnchor="end" style={{ textTransform: 'uppercase' }}>Colombo</text>
                        <text x="19" y="116" fill="#ff6600" fontSize="2.5" className="map-text opacity-75 fw-bold" textAnchor="end" style={{ textTransform: 'uppercase' }}>Start Point</text>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Body;

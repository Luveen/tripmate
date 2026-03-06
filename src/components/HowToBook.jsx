import React from 'react';
import { motion } from 'motion/react';
import './HowToBook.css';

const steps = [
    {
        id: "01.",
        title: "Choose Package",
        desc: "Visit our website and explore the various tour packages we offer. Select the one that best suits your interests and make appointment."
    },
    {
        id: "02.",
        title: "Confirm Availability",
        desc: "Check the availability for your preferred tour dates. Contact us and our customer service team will assist you with any questions and confirm the available slots."
    },
    {
        id: "03.",
        title: "Make a Reservation",
        desc: "Once you've confirmed availability, fill out our online reservation form, including the chosen package, date, number of participants, and any special requests."
    },
    {
        id: "04.",
        title: "Receive Confirmation",
        desc: "After your payment is processed, you'll receive a booking confirmation via email. Include all the necessary details of your tour, including meeting points and itineraries."
    }
];

const keywords = ["Transportation", "Exploration", "Tour Guide", "Adventure", "Sunrise Viewing", "Mountain Trekking", "Beach Escape", "Cultural Tours"];

const HowToBook = () => {
    return (
        <section className="how-to-book py-5 bg-white overflow-hidden">
            {/* Main Header */}
            <div className="container-fluid px-0 mb-5">
                <h2 className="display-1 fw-black text-center mb-4 main-title">How to Book Your Tour</h2>

                {/* Ribbon Marquee */}
                <div className="ribbon-container py-3 border-top border-bottom">
                    <div className="ribbon-content d-flex align-items-center gap-5">
                        {/* Duplicate for seamless scroll */}
                        {[...keywords, ...keywords].map((kw, i) => (
                            <React.Fragment key={i}>
                                <span className="text-uppercase fw-bold letter-spacing-1">{kw}</span>
                                <i className="bi bi-star-fill text-muted opacity-25" style={{ fontSize: '10px' }}></i>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container py-5">
                <div className="row g-0 align-items-stretch">
                    {/* Left Persuasion */}
                    <div className="col-lg-4 d-flex flex-column justify-content-center p-5 border-end">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="display-4 fw-bold mb-4">4 Easy Steps</h3>
                            <p className="text-muted lead mb-5">
                                Booking your Sri Lankan adventure is easy and straightforward. Follow these four simple steps to secure your unforgettable journey with TripMate.
                            </p>

                            <button className="btn btn-book-outline rounded-pill px-5 py-3 fw-bold d-flex align-items-center gap-3">
                                Book Our Tour
                                <span className="arrow-circle d-flex align-items-center justify-content-center">
                                    <i className="bi bi-arrow-up-right"></i>
                                </span>
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Steps Grid */}
                    <div className="col-lg-8">
                        <div className="row g-0 h-100">
                            {steps.map((step, index) => (
                                <div key={index} className={`col-md-6 p-5 ${index < 2 ? 'border-bottom' : ''} ${index % 2 === 0 ? 'border-end' : ''}`}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <span className="step-number display-5 fw-bold d-block mb-4">{step.id}</span>
                                        <h4 className="fw-bold mb-3">{step.title}</h4>
                                        <p className="text-muted mb-0">{step.desc}</p>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowToBook;

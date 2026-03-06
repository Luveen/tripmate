import React from 'react';
import { motion } from 'motion/react';
import './Testimonials.css';

const testimonials = [
    {
        id: 1,
        author: "James Carter",
        role: "Adventure Enthusiast",
        rating: 5,
        text: "Incredible team! Sabi was our trip advisor and driver, and he delivered exactly what we needed, on time and beyond expectations. His knowledge of Sri Lanka is unmatched.",
        image: "https://i.pravatar.cc/150?u=james"
    },
    {
        id: 2,
        author: "Anna Martinez",
        role: "Solo Traveler",
        rating: 5,
        text: "A smooth process from start to finish. Highly professional team! Sabi made sure every detail of my tour was perfect. He is much more than just a driver.",
        image: "https://i.pravatar.cc/150?u=anna"
    },
    {
        id: 3,
        text: "Our family trip was exactly what we envisioned—clean, modern, and unique. #1 in the industry. Sabi was the perfect advisor and driver for us!",
        rating: 5,
        author: "Emily Davis",
        role: "Family Traveler",
        image: "https://i.pravatar.cc/150?u=emily"
    },

];

const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials-section py-5 bg-white overflow-hidden">
            <div className="container py-5">
                <div className="header-container mb-5">
                    <span className="text-uppercase small fw-bold letter-spacing-2 d-flex align-items-center gap-2 mb-3">
                        <i className="bi bi-plus-circle-fill"></i> Testimonials
                    </span>
                    <h2 className="display-1 fw-black main-title mb-0">Experiences.</h2>
                    <span className="text-muted fw-medium mt-2 d-block">©2025</span>
                </div>

                <div className="row g-4 align-items-start mt-4">
                    {/* Summary Card */}
                    <div className="col-lg-3 col-md-6 order-last order-lg-first">
                        <motion.div
                            className="summary-card p-5 rounded-5 shadow-sm border h-100 d-flex flex-column justify-content-between"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="rating-overview mb-5">
                                <h3 className="display-4 fw-black mb-0">4.9<span className="fs-4 text-muted">/5</span></h3>
                                <p className="text-muted small mt-2">
                                    We've delivered <strong>200+</strong> tours that help travelers experience the real beauty of Sri Lanka.
                                </p>
                            </div>

                            <div className="bottom-info">
                                <div className="brand mb-4">
                                    <h4 className="fw-bold mb-1">Trip<span className="text-orange">Mate</span></h4>
                                    <div className="stars text-warning d-flex gap-1 mb-2">
                                        {[1, 2, 3, 4].map(s => <i key={s} className="bi bi-star-fill small"></i>)}
                                    </div>
                                    <span className="text-muted small">Trusted by travelers worldwide</span>
                                </div>
                                <button className="btn btn-dark w-100 rounded-pill py-3 fw-bold">Leave a review</button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Testimonial Cards */}
                    {testimonials.map((t, index) => (
                        <div key={t.id} className={`col-lg-3 col-md-6 ${index % 2 === 0 ? 'mt-lg-5' : ''}`}>
                            <motion.div
                                className="testimonial-card rounded-5 shadow-sm border bg-white overflow-hidden d-flex flex-column"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="card-top p-4 d-flex align-items-center gap-3 border-bottom bg-light bg-opacity-10">
                                    <img src={t.image} alt={t.author} className="rounded-circle avatar" width="45" height="45" />
                                    <div>
                                        <h6 className="mb-0 fw-bold">{t.author}</h6>
                                        <span className="text-muted small">{t.role}</span>
                                    </div>
                                </div>
                                <div className="card-body p-4 flex-grow-1 d-flex flex-column justify-content-between">
                                    <div>
                                        <div className="stars text-warning d-flex gap-1 mb-3">
                                            {[...Array(t.rating)].map((_, i) => <i key={i} className="bi bi-star-fill" style={{ fontSize: '10px' }}></i>)}
                                        </div>
                                        <p className="card-text text-muted">{t.text}</p>
                                    </div>
                                    <div className="plus-icon text-end mt-3 opacity-25">
                                        <i className="bi bi-plus-lg"></i>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

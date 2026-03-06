import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer-agency pt-5 pb-4">
            <div className="container">
                {/* Tier 1: CTA Section */}
                <div className="cta-section row align-items-center mb-5 pb-5 border-bottom border-white border-opacity-10">
                    <div className="col-lg-7 mb-4 mb-lg-0">
                        <h2 className="display-5 fw-bold text-white mb-2">Book Your Tour Today!</h2>
                        <p className="lead text-white opacity-50 mb-0">Join us for an unforgettable Sri Lankan adventure and discover the beauty of the island.</p>
                    </div>
                    <div className="col-lg-5">
                        <div className="subscription-box pill-shape d-flex align-items-center p-1 bg-white bg-opacity-10 border border-white border-opacity-10">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="form-control bg-transparent border-0 text-white flex-grow-1 px-4"
                            />
                            <button className="btn btn-white rounded-pill px-4 py-2 fw-bold shadow-sm">Subscribe</button>
                        </div>
                    </div>
                </div>

                {/* Tier 2: Navigation Grid */}
                <div className="row mb-5">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <div className="footer-brand mb-4">
                            <h3 className="fw-bold text-white mb-0" style={{ letterSpacing: '-1px' }}>
                                Trip<span style={{ color: '#ff6600' }}>Mate</span>
                            </h3>
                            <div className="brand-dot-line mt-2" style={{ width: '40px', h: '3px', background: '#ff6600' }}></div>
                        </div>
                        <p className="text-white opacity-50 pe-lg-5 mb-4">
                            Discover the awe-inspiring beauty of Sri Lanka with our exclusive curated tours. Witness the breathtaking sunrise from the summit, embark on thrilling Jeep adventures, and immerse yourself in the rich local culture.
                        </p>
                        <a href="#about" className="text-white text-decoration-none fw-bold d-flex align-items-center">
                            More About us <i className="bi bi-arrow-up-right ms-2 fs-6"></i>
                        </a>
                    </div>

                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-md-4 col-12 mb-4 mb-md-0">
                                <h6 className="text-white fw-bold mb-4">Navigation</h6>
                                <nav className="d-flex flex-column gap-3">
                                    <Link to="/" className="text-white opacity-50 text-decoration-none hover-opacity-100">Home</Link>
                                    <Link to="/destinations" className="text-white opacity-50 text-decoration-none hover-opacity-100">Destinations</Link>
                                    <Link to="/tour-details" className="text-white opacity-50 text-decoration-none hover-opacity-100">Book a Trip</Link>
                                    <a href="/#gallery" className="text-white opacity-50 text-decoration-none hover-opacity-100">Experiences</a>
                                    <a href="/#why-tripmate" className="text-white opacity-50 text-decoration-none hover-opacity-100">Why TripMate</a>
                                </nav>
                            </div>
                            <div className="col-md-4 col-6">
                                <h6 className="text-white fw-bold mb-4">Contact Us</h6>
                                <div className="d-flex flex-column gap-3 text-white opacity-50 small">
                                    <span>+94 123 456 7890</span>
                                    <span>info@tripmate.lk</span>
                                    <div className="mt-4">
                                        <h6 className="text-white fw-bold mb-2">Location</h6>
                                        <span>TripMate Adventures Sri Lanka<br />Jl. Colombo No. 123<br />Colombo, Western Province</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-6">
                                <h6 className="text-white fw-bold mb-4">Company & Legals</h6>
                                <nav className="d-flex flex-column gap-3 text-white opacity-50 small">
                                    <a href="#" className="text-white text-decoration-none hover-opacity-100">About Us</a>
                                    <a href="#" className="text-white text-decoration-none hover-opacity-100">Frequently Ask Question</a>
                                    <a href="#" className="text-white text-decoration-none hover-opacity-100">Term of Services</a>
                                    <a href="#" className="text-white text-decoration-none hover-opacity-100">License</a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tier 3: Bottom Bar */}
                <div className="row align-items-center pt-5 border-top border-white border-opacity-10">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <div className="social-links d-flex gap-2">
                            {['facebook', 'instagram', 'twitter-x', 'linkedin', 'youtube'].map((social) => (
                                <a key={social} href="#" className="social-pill d-flex align-items-center justify-content-center rounded-circle bg-white text-dark text-decoration-none shadow-sm" style={{ width: '40px', height: '40px' }}>
                                    <i className={`bi bi-${social}`}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-6 text-md-end text-white opacity-25 small">
                        <span>&copy; {new Date().getFullYear()} TripMate Sri Lanka. All Rights Reserved</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

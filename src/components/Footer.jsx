import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer-premium bg-white position-relative mt-5 pt-3">
            {/* Top decorative gradient line */}
            <div className="footer-deco-line"></div>
            
            <div className="container pt-5 pb-4">
                <div className="row align-items-center mb-5">
                    {/* Left Brand */}
                    <div className="col-lg-5 mb-5 mb-lg-0 text-center text-lg-start">
                        <h2 className="display-4 fw-black mb-1" style={{ letterSpacing: '-2px' }}>
                            Trip<span style={{ color: 'var(--brand-primary)' }}>Mate</span>
                        </h2>
                        <p className="text-muted fw-bold letter-spacing-2 mb-0 small text-uppercase">
                            Connecting People · Sri Lanka
                        </p>
                    </div>

                    {/* Right Quick Links & Contact */}
                    <div className="col-lg-7">
                        <div className="d-flex flex-wrap justify-content-center justify-content-lg-end gap-5">
                            <div className="d-flex flex-column gap-3 text-center text-lg-start">
                                <h6 className="fw-black text-dark text-uppercase letter-spacing-1 mb-2">Explore</h6>
                                <Link to="/" className="footer-link">Home</Link>
                                <Link to="/destinations" className="footer-link">Destinations</Link>
                                <Link to="/tour-details" className="footer-link">Book a Trip</Link>
                            </div>
                            
                            <div className="d-flex flex-column gap-3 text-center text-lg-start">
                                <h6 className="fw-black text-dark text-uppercase letter-spacing-1 mb-2">Contact Sabi</h6>
                                <a href="tel:+94770562642" className="footer-link d-flex align-items-center justify-content-center justify-content-lg-start gap-2">
                                    <div className="icon-wrapper"><i className="bi bi-telephone-fill"></i></div> +94 77 056 2642
                                </a>
                                <a href="mailto:sabithan.shaggy@gmail.com" className="footer-link d-flex align-items-center justify-content-center justify-content-lg-start gap-2">
                                    <div className="icon-wrapper"><i className="bi bi-envelope-at-fill"></i></div> sabithan.shaggy@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="footer-divider my-5"></div>

                {/* Bottom Row */}
                <div className="row align-items-center">
                    <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
                        <p className="text-muted small fw-bold mb-0 letter-spacing-1">
                            &copy; {new Date().getFullYear()} TRIPMATE SRI LANKA. ALL RIGHTS RESERVED.
                        </p>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <div className="d-flex justify-content-center justify-content-md-end gap-3">
                            <a href="https://www.instagram.com/love_srilanka_94/" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="Instagram">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="https://wa.me/94770562642" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="WhatsApp">
                                <i className="bi bi-whatsapp"></i>
                            </a>
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="Facebook">
                                <i className="bi bi-facebook"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DestinationModal.css';

const DestinationModal = ({ destination, isOpen, onClose }) => {
    const navigate = useNavigate();
    const [activeImg, setActiveImg] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            // Small delay for the CSS animation to trigger
            requestAnimationFrame(() => setIsVisible(true));
        } else {
            setIsVisible(false);
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 400); // Wait for exit animation
    };

    const handleBookTrip = () => {
        handleClose();
        setTimeout(() => navigate('/tour-details'), 450);
    };

    if (!isOpen || !destination) return null;

    return (
        <div className={`dest-modal-backdrop ${isVisible ? 'active' : ''}`} onClick={handleClose}>
            <div className={`dest-modal-container ${isVisible ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>

                {/* Close Button */}
                <button className="dest-modal-close" onClick={handleClose}>
                    <i className="bi bi-x-lg"></i>
                </button>

                {/* Scrollable Content */}
                <div className="dest-modal-scroll">

                    {/* Hero Image Section */}
                    <div className="dest-modal-hero">
                        <img
                            src={destination.gallery[activeImg]}
                            alt={destination.name}
                            className="dest-modal-hero-img"
                        />
                        <div className="dest-modal-hero-overlay">
                            <div className="dest-modal-hero-content">
                                <span className="dest-modal-badge">{destination.sub}</span>
                                <h1 className="dest-modal-title">{destination.name}</h1>
                                <div className="dest-modal-rating">
                                    <i className="bi bi-star-fill"></i> {destination.rating} Rating
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Gallery Thumbnails */}
                    <div className="dest-modal-gallery">
                        {destination.gallery.map((img, i) => (
                            <button
                                key={i}
                                className={`dest-gallery-thumb ${activeImg === i ? 'active' : ''}`}
                                onClick={() => setActiveImg(i)}
                            >
                                <img src={img} alt={`${destination.name} ${i + 1}`} />
                            </button>
                        ))}
                    </div>

                    {/* Content Body */}
                    <div className="dest-modal-body">

                        {/* Description */}
                        <p className="dest-modal-desc">{destination.longDescription}</p>

                        {/* Info Cards Row */}
                        <div className="dest-info-grid">
                            <div className="dest-info-card">
                                <div className="dest-info-icon"><i className="bi bi-calendar-heart"></i></div>
                                <h6>Best Time to Visit</h6>
                                <p>{destination.bestTime}</p>
                            </div>
                            <div className="dest-info-card">
                                <div className="dest-info-icon"><i className="bi bi-clock-history"></i></div>
                                <h6>Suggested Duration</h6>
                                <p>{destination.duration}</p>
                            </div>
                            <div className="dest-info-card">
                                <div className="dest-info-icon"><i className="bi bi-geo-alt"></i></div>
                                <h6>Distance from Colombo</h6>
                                <p>{destination.distanceFromColombo}</p>
                            </div>
                        </div>

                        {/* Must-See Spots */}
                        <div className="dest-section">
                            <h4 className="dest-section-title">
                                <i className="bi bi-pin-map-fill"></i> Must-See Spots
                            </h4>
                            <div className="dest-spots-grid">
                                {destination.mustSee.map((spot, i) => (
                                    <div className="dest-spot-chip" key={i}>
                                        <i className="bi bi-check-circle-fill"></i> {spot}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Highlights */}
                        <div className="dest-section">
                            <h4 className="dest-section-title">
                                <i className="bi bi-lightning-fill"></i> Key Highlights
                            </h4>
                            <div className="dest-highlights-list">
                                {destination.highlights.map((h, i) => (
                                    <div className="dest-highlight-item" key={i}>
                                        <span className="dest-highlight-num">{String(i + 1).padStart(2, '0')}</span>
                                        <p>{h}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="dest-modal-cta">
                            <div className="dest-cta-text">
                                <h4>Ready to explore {destination.name}?</h4>
                                <p>Let Sabi craft your perfect itinerary with personalized stops and local experiences.</p>
                            </div>
                            <button className="dest-cta-btn" onClick={handleBookTrip}>
                                Book This Trip <i className="bi bi-arrow-right ms-2"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationModal;

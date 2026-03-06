import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import './Gallery.css';

// Importing assets
import tm1 from "../assets/TripMate1.jpeg";
import tm2 from "../assets/TripMate2.jpeg";
import tm3 from "../assets/TripMate3.jpeg";
import tm4 from "../assets/TripMate4.jpeg";
import tm5 from "../assets/TripMate5.jpeg";
import tm6 from "../assets/TripMate6.jpeg";
import tm7 from "../assets/TripMate7.jpeg";
import tm8 from "../assets/TripMate8.jpeg";

const galleryImages = [
    { src: tm1, title: "Island Expeditions", size: "tall" },
    { src: tm2, title: "Heritage Trails", size: "wide" },
    { src: tm3, title: "Coastal Sunsets", size: "tall" },
    { src: tm4, title: "Mountain Peaks", size: "small" },
    { src: tm5, title: "Hidden Gems", size: "tall" },
    { src: tm6, title: "Cultural Rhythms", size: "wide" },
    { src: tm7, title: "Safari Adventures", size: "small" },
    { src: tm8, title: "Verdent Estates", size: "tall" },
];

function Gallery() {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <section id="gallery" className="gallery-section py-5 bg-white overflow-hidden">
            <div className="container-fluid py-5 px-lg-5 mx-auto" style={{ maxWidth: '1400px' }}>
                {/* Standardized Header */}
                <div className="header-container mb-5">
                    <span className="text-uppercase small fw-bold letter-spacing-2 d-flex align-items-center gap-2 mb-3">
                        <i className="bi bi-camera-fill" style={{ color: '#ff6600' }}></i> Explore
                    </span>
                    <h2 className="display-1 fw-black main-title mb-0">Our Gallery.</h2>
                    <span className="text-muted fw-medium mt-2 d-block">Captured by Travelers</span>
                </div>

                <div className="gallery-staggered-grid mt-4">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={index}
                            className={`gallery-item ${image.size}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            onClick={() => setSelectedImg(image)}
                        >
                            <div className="gallery-inner shadow-sm border rounded-5 overflow-hidden position-relative">
                                <motion.img
                                    src={image.src}
                                    alt={image.title}
                                    className="img-fluid w-100 h-100 object-fit-cover"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                />
                                <div className="gallery-overlay">
                                    <div className="overlay-content p-4">
                                        <span className="text-uppercase small letter-spacing-2 text-white-50 mb-1 d-block">Destinations</span>
                                        <h4 className="text-white fw-bold mb-0">{image.title}</h4>
                                    </div>
                                    <div className="plus-btn">
                                        <i className="bi bi-plus-lg"></i>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="gallery-lightbox position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                        style={{ zIndex: 9999 }}
                        onClick={() => setSelectedImg(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 20 }}
                            className="lightbox-content position-relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="close-lightbox"
                                onClick={() => setSelectedImg(null)}
                            >
                                <i className="bi bi-x-lg"></i>
                            </button>

                            <img
                                src={selectedImg.src}
                                alt={selectedImg.title}
                                className="img-fluid rounded-5 shadow-2xl main-lightbox-img"
                            />

                            <div className="mt-4 text-center text-white">
                                <h2 className="display-4 fw-black mb-0">{selectedImg.title}</h2>
                                <span className="text-white-50 letter-spacing-2 fw-medium text-uppercase">Sri Lanka Experience</span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

export default Gallery;

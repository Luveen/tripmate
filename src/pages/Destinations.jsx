import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Destinations.css';

// Using existing assets for storytelling
import sigiriyaImg from "../assets/sigiriya-sl.jpg";
import ellaImg from "../assets/ella-sl.jpg";
import galleImg from "../assets/galle-sl.jpg";
import kandyImg from "../assets/kandy-sl.jpg";
import SketchDivider from '../components/SketchDivider';

const stories = [
    {
        id: 1,
        title: "The Hidden Waterfall",
        location: "Ella",
        image: ellaImg,
        preview: "We spent three hours trekking through dense jungle to find a spot not on any map...",
        fullStory: "We spent three hours trekking through dense jungle to find a spot not on any map. My guests from Germany wanted something truly 'local', so I took them to a secret waterfall I discovered years ago. We had a picnic by the falling water, and they told me it was the highlight of their entire Sri Lankan journey. Seeing that spark of wonder in their eyes is why I love being a guide.",
        customer: "Lukas & Mia",
        date: "Jan 2024"
    },
    {
        id: 2,
        title: "Sunrise at Lion Rock",
        location: "Sigiriya",
        image: sigiriyaImg,
        preview: "The air was crisp and the sky a deep purple when we started our journey...",
        fullStory: "The air was crisp and the sky a deep purple when we started our journey. I made sure we arrived before the crowds. As we reached the summit of Sigiriya, the sun began to peek over the horizon, painting the world in gold. We sat in silence for a long time, just absorbing the majesty of the ancient fortress. It’s these shared moments of quiet awe that stay with you forever.",
        customer: "The Henderson Family",
        date: "Dec 2023"
    },
    {
        id: 3,
        title: "Coastal Rhythms",
        location: "Galle",
        image: galleImg,
        preview: "Navigating the narrow streets of the fort at dusk feels like stepped into a different era...",
        fullStory: "Navigating the narrow streets of the fort at dusk feels like stepped into a different era. I took my guests to a small, family-run restaurant hidden in a back alley. We spent the evening listening to old stories from the proprietor while the sea breeze wafted through the windows. It wasn't just a tour; it was an immersion into the living heartbeat of Galle's history.",
        customer: "Sarah & James",
        date: "Feb 2024"
    },
    {
        id: 4,
        title: "The Spice Trail",
        location: "Kandy",
        image: kandyImg,
        preview: "Markets in Kandy are a sensory explosion. I love watching guests react to the spices...",
        fullStory: "Markets in Kandy are a sensory explosion. I love watching guests react to the spices they've only seen in jars back home. We spent the morning meeting vendors I've known for decades, tasting things they'd never heard of. One of my guests was a chef, and seeing his excitement at the raw ingredients was incredible. We ended the day with a home-cooked meal at a friend's house, sharing traditions over a steaming curry.",
        customer: "Chef Antonio",
        date: "Nov 2023"
    }
];

const Destinations = () => {
    const [selectedStory, setSelectedStory] = useState(null);

    return (
        <div className="destinations-page bg-dark min-vh-100 pt-5 text-white">
            {/* Hero Section */}
            <header className="destinations-hero py-5 text-center position-relative overflow-hidden">
                <div className="hero-blur position-absolute top-50 start-50 translate-middle w-100 h-100"></div>
                <motion.div
                    className="container position-relative py-5"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-uppercase small fw-bold letter-spacing-2 text-warning mb-3 d-block">Explore Sabi's Journeys</span>
                    <h1 className="display-1 fw-black main-title mb-3">
                        <span style={{ color: '#ff6600' }}>Our Stories</span>
                    </h1>
                    <p className="lead text-white-50 mx-auto" style={{ maxWidth: '700px' }}>
                        Beyond the landmarks, TripMate is about the people we meet and the memories we create together across the beautiful island of Sri Lanka.
                    </p>
                </motion.div>
            </header>

            {/* Stories Grid */}
            <section className="stories-grid py-5">
                <div className="container px-lg-5">
                    <div className="section-header text-center mb-5">
                        <h2 className="display-4 fw-bold">Sabi's Journey Log</h2>
                        <div className="orange-line mx-auto mb-4" style={{ width: '80px', height: '4px', backgroundColor: '#ff6600' }}></div>
                    </div>
                    <div className="row g-4">
                        {stories.map((story, index) => (
                            <div className="col-lg-6" key={story.id}>
                                <motion.div
                                    className="story-card glass-morphism rounded-5 overflow-hidden border border-white border-opacity-10 h-100"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="row g-0 h-100">
                                        <div className="col-md-5">
                                            <div className="story-img-container h-100 overflow-hidden">
                                                <img src={story.image} alt={story.title} className="w-100 h-100 object-fit-cover" />
                                            </div>
                                        </div>
                                        <div className="col-md-7 p-4 p-xl-5 d-flex flex-column justify-content-center">
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <span className="text-warning small fw-bold letter-spacing-1">{story.location}</span>
                                                <span className="text-white-50 x-small">{story.date}</span>
                                            </div>
                                            <h3 className="fw-bold mb-3">{story.title}</h3>
                                            <p className="text-white-50 small mb-4">{story.preview}</p>
                                            <div className="d-flex justify-content-between align-items-center mt-auto">
                                                <div className="guest-info d-flex align-items-center gap-2">
                                                    <div className="guest-avatar rounded-circle bg-warning text-dark fw-bold d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', fontSize: '10px' }}>
                                                        {story.customer[0]}
                                                    </div>
                                                    <span className="small text-white-50">with {story.customer}</span>
                                                </div>
                                                <button
                                                    className="btn btn-outline-warning btn-sm rounded-pill px-3"
                                                    onClick={() => setSelectedStory(story)}
                                                >
                                                    Read More
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <SketchDivider />

            {/* Explore by Region Section */}
            <section className="regions-section py-5 bg-white">
                <div className="container px-lg-5">
                    <div className="section-header text-center mb-5 text-dark">
                        <h2 className="display-4 fw-bold">Explore by Region</h2>
                        <p className="text-muted">Discover the diverse landscapes of the Teardrop Island</p>
                    </div>
                    <div className="row g-4">
                        {[
                            { title: 'Cultural Triangle', desc: 'Ancient cities, sacred temples, and thousand-year-old history.', icon: 'bi-bank2' },
                            { title: 'Hill Country', desc: 'Misty tea estates, cascading waterfalls, and cool mountain air.', icon: 'bi-cloud-sun-fill' },
                            { title: 'Wild Coastline', desc: 'Golden beaches, whale watching, and legendary surf spots.', icon: 'bi-water' },
                            { title: 'Deep South', desc: 'Untamed wildlife safaris and colonial heritage forts.', icon: 'bi-binoculars-fill' }
                        ].map((region, i) => (
                            <div className="col-md-6 col-lg-3" key={i}>
                                <motion.div
                                    className="region-card p-4 rounded-5 border border-dark border-opacity-10 text-center h-100 bg-light"
                                    whileHover={{ y: -5, borderColor: '#ff6600', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                                    style={{ color: '#333' }}
                                >
                                    <div className="region-icon mb-3" style={{ fontSize: '2.5rem', color: '#ff6600' }}>
                                        <i className={`bi ${region.icon}`}></i>
                                    </div>
                                    <h5 className="fw-bold text-dark">{region.title}</h5>
                                    <p className="text-muted small mb-0">{region.desc}</p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Traveler Essentials */}
            <section className="essentials-section py-5 bg-white">
                <div className="container px-lg-5">
                    <div className="p-5 rounded-5 border border-dark border-opacity-10 bg-light">
                        <div className="row align-items-center text-dark">
                            <div className="col-lg-4 mb-4 mb-lg-0 text-center text-lg-start">
                                <h2 className="display-5 fw-bold mb-3">Traveler Essentials.</h2>
                                <p className="text-muted">Quick tips for your Sri Lankan adventure</p>
                            </div>
                            <div className="col-lg-8">
                                <div className="row g-4">
                                    {[
                                        { label: 'Best Time', val: 'Dec - April (West/South), May - Sept (East)', icon: 'bi-calendar-event' },
                                        { label: 'Currency', val: 'Sri Lankan Rupee (LKR)', icon: 'bi-cash-coin' },
                                        { label: 'Visa', val: 'ETA required for most countries', icon: 'bi-file-person' },
                                        { label: 'Local Sip', val: 'Try the King Coconut water', icon: 'bi-cup-hot-fill' }
                                    ].map((item, i) => (
                                        <div className="col-sm-6" key={i}>
                                            <div className="d-flex align-items-center gap-3">
                                                <i className={`bi ${item.icon} h4 mb-0`} style={{ color: '#ff6600' }}></i>
                                                <div>
                                                    <span className="d-block x-small fw-bold text-warning" style={{ color: '#ff6600 !important' }}>{item.label}</span>
                                                    <span className="small text-dark fw-medium">{item.val}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Closing CTA */}
            <section className="final-cta-dest py-5 bg-white">
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="py-5 text-dark"
                    >
                        <h2 className="display-4 fw-black mb-4">Ready to Write Your Own Story?</h2>
                        <button
                            className="btn btn-primary rounded-pill px-5 py-3 fw-bold h5 shadow-lg"
                            onClick={() => window.location.href = '/tour-details'}
                            style={{ backgroundColor: '#ff6600', border: 'none' }}
                        >
                            Book Your Journey Now
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Lightbox / Expansion */}
            <AnimatePresence>
                {selectedStory && (
                    <motion.div
                        className="story-lightbox fixed-top w-100 h-100 d-flex align-items-center justify-content-center p-3 p-md-5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ zIndex: 1100, backdropFilter: 'blur(15px)', background: 'rgba(0,0,0,0.85)' }}
                        onClick={() => setSelectedStory(null)}
                    >
                        <motion.div
                            className="story-content-box glass-morphism rounded-5 overflow-hidden border border-white border-opacity-20 position-relative"
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{ maxWidth: '1000px', width: '100%' }}
                        >
                            <button
                                className="close-btn position-absolute top-0 end-0 m-4 btn btn-link text-white text-decoration-none h4"
                                onClick={() => setSelectedStory(null)}
                            >
                                <i className="bi bi-x-lg"></i>
                            </button>

                            <div className="row g-0">
                                <div className="col-lg-5">
                                    <div className="lightbox-img-wrap h-100" style={{ minHeight: '400px' }}>
                                        <img src={selectedStory.image} alt={selectedStory.title} className="w-100 h-100 object-fit-cover" />
                                    </div>
                                </div>
                                <div className="col-lg-7 p-4 p-md-5">
                                    <span className="text-warning small fw-bold letter-spacing-2 mb-2 d-block">{selectedStory.location}</span>
                                    <h2 className="display-4 fw-black mb-4">{selectedStory.title}</h2>
                                    <div className="story-full-text lead text-white-75 mb-5" style={{ lineHeight: '1.8' }}>
                                        {selectedStory.fullStory}
                                    </div>
                                    <div className="lightbox-footer d-flex align-items-center justify-content-between pt-4 border-top border-white border-opacity-10">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="guest-avatar rounded-circle bg-warning text-dark fw-bold d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                                                {selectedStory.customer[0]}
                                            </div>
                                            <div>
                                                <h6 className="mb-0 fw-bold">{selectedStory.customer}</h6>
                                                <p className="small text-white-50 mb-0">Traveled in {selectedStory.date}</p>
                                            </div>
                                        </div>
                                        <div className="sabi-badge d-flex align-items-center gap-2 px-3 py-2 rounded-pill bg-white bg-opacity-10">
                                            <i className="bi bi-person-check-fill text-warning"></i>
                                            <span className="small fw-bold">Guided by Sabi</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Destinations;

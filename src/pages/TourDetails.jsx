import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './TourDetails.css';

// Asset imports
import heroImg from "../assets/sigiriya-sl.jpg";

const routeDistances = {
    "Colombo-Sigiriya": 175,
    "Colombo-Ella": 205,
    "Colombo-Kandy": 115,
    "Colombo-Galle": 125,
    "Colombo-Yala": 260,
    "Galle-Ella": 135,
    "Kandy-Sigiriya": 90,
    "Kandy-Ella": 135,
    "Negombo-Sigiriya": 160,
    "Negombo-Colombo": 35,
    "Colombo-Nuwara Eliya": 165,
    "Ella-Galle": 135,
    "Sigiriya-Ella": 180
};

const vehicleOptions = [
    { label: "TukTuk", rate: 0.35, capacity: "3 Seater", icon: "bi-bicycle" },
    { label: "Sedan", rate: 0.65, capacity: "4 Seater", icon: "bi-car-front-fill" },
    { label: "Van", rate: 0.85, capacity: "9-14 Seater", icon: "bi-truck-flatbed" },
    { label: "Luxury SUV", rate: 1.20, capacity: "5 Seater", icon: "bi-shield-check" }
];

const locations = ["Colombo", "Sigiriya", "Ella", "Kandy", "Galle", "Yala", "Negombo", "Nuwara Eliya"];

const TourDetails = () => {
    const [pickup, setPickup] = useState("Colombo");
    const [dropoff, setDropoff] = useState("Sigiriya");
    const [vehicle, setVehicle] = useState(vehicleOptions[1]);
    const [distance, setDistance] = useState(175);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const key = `${pickup}-${dropoff}`;
        const revKey = `${dropoff}-${pickup}`;
        const dist = routeDistances[key] || routeDistances[revKey] || 150; // default if not found
        setDistance(dist);
        setTotalPrice(Math.round(dist * vehicle.rate));
    }, [pickup, dropoff, vehicle]);

    const handleInquiry = () => {
        const message = `Hello Sabi! I'd like to book a trip with TripMate.%0A%0A` +
            `📍 Route: ${pickup} to ${dropoff}%0A` +
            `📏 Distance: ${distance} KM%0A` +
            `🚗 Vehicle: ${vehicle.label}%0A` +
            `💰 Estimated Price: $${totalPrice}%0A%0A` +
            `Is this available?`;
        window.open(`https://wa.me/94770562642?text=${message}`, '_blank');
    };

    return (
        <div className="tour-details-page bg-white min-vh-100">
            {/* Immersive Hero */}
            <section className="tour-hero-section position-relative overflow-hidden">
                <div className="hero-img-container">
                    <img src={heroImg} alt="Sigiriya" className="w-100 h-100 object-fit-cover shadow-2xl" />
                </div>
                <div className="hero-overlay d-flex align-items-end p-5">
                    <div className="container-fluid px-lg-5 mx-auto" style={{ maxWidth: '1400px' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-white mb-5"
                        >
                            <span className="badge rounded-pill bg-warning text-dark px-4 py-2 fw-bold mb-3 shadow-lg">DYNAMIC BOOKING</span>
                            <h1 className="display-1 fw-black main-title text-white mb-2">Book Your Journey.</h1>
                            <p className="lead text-white-50 letter-spacing-2 fw-bold small">PRECISION CALCULATED TRIPS ACROSS SRI LANKA</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className="container-fluid py-5 px-lg-5 mx-auto" style={{ maxWidth: '1400px' }}>
                <div className="row g-5">
                    {/* Left content: Calculator UI */}
                    <div className="col-lg-8">
                        <div className="header-container mb-5">
                            <span className="text-uppercase small fw-bold letter-spacing-2 d-flex align-items-center gap-2 mb-2">
                                <i className="bi bi-calculator" style={{ color: '#ff6600' }}></i> Pricing Engine
                            </span>
                            <h2 className="display-4 fw-black main-title-sm mb-0">Custom Trip Planner.</h2>
                        </div>

                        <div className="calculation-card card border-0 shadow-2xl rounded-5 p-5 mb-5 overflow-hidden position-relative">
                            <div className="bg-orange-subtle position-absolute top-0 end-0 p-5 rounded-circle" style={{ transform: 'translate(30%, -30%)', background: 'rgba(255, 102, 0, 0.05)', width: '300px', height: '300px' }}></div>

                            <div className="row g-4 position-relative">
                                <div className="col-md-6">
                                    <label className="small fw-bold letter-spacing-2 text-muted mb-3 d-block">PICK-UP LOCATION</label>
                                    <select
                                        className="form-select form-select-lg border-2 rounded-4 p-3 fw-bold"
                                        value={pickup}
                                        onChange={(e) => setPickup(e.target.value)}
                                    >
                                        {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="small fw-bold letter-spacing-2 text-muted mb-3 d-block">DROP-OFF LOCATION</label>
                                    <select
                                        className="form-select form-select-lg border-2 rounded-4 p-3 fw-bold"
                                        value={dropoff}
                                        onChange={(e) => setDropoff(e.target.value)}
                                    >
                                        {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                                    </select>
                                </div>

                                <div className="col-12 mt-4">
                                    <label className="small fw-bold letter-spacing-2 text-muted mb-4 d-block">SELECT VEHICLE</label>
                                    <div className="row g-3">
                                        {vehicleOptions.map((opt) => (
                                            <div key={opt.label} className="col-6 col-md-3">
                                                <div
                                                    className={`vehicle-select-card p-4 rounded-5 text-center cursor-pointer transition-all ${vehicle.label === opt.label ? 'active' : ''}`}
                                                    onClick={() => setVehicle(opt)}
                                                >
                                                    <i className={`bi ${opt.icon} display-6 mb-2 d-block`}></i>
                                                    <h6 className="fw-bold mb-1">{opt.label}</h6>
                                                    <span className="small opacity-50">{opt.capacity}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Stats */}
                        <div className="row g-4 mb-5">
                            <div className="col-md-6">
                                <div className="stat-pill p-4 rounded-5 border-2 border shadow-sm d-flex align-items-center gap-4 bg-light bg-opacity-50">
                                    <div className="icon-circle bg-dark text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                                        <i className="bi bi-geo-alt fs-3"></i>
                                    </div>
                                    <div>
                                        <span className="small fw-bold text-muted d-block letter-spacing-2 text-uppercase">Total Distance</span>
                                        <h2 className="fw-black mb-0">{distance} <span className="fs-6 fw-bold">KM</span></h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="stat-pill p-4 rounded-5 border-2 border shadow-sm d-flex align-items-center gap-4 bg-dark text-white">
                                    <div className="icon-circle bg-warning text-dark rounded-circle d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                                        <i className="bi bi-currency-dollar fs-3"></i>
                                    </div>
                                    <div>
                                        <span className="small fw-bold opacity-50 d-block letter-spacing-2 text-uppercase">Est. Price</span>
                                        <h2 className="fw-black mb-0 text-warning">${totalPrice} <span className="fs-6 fw-bold text-white-50">USD</span></h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Note for Pick and Drop off */}
                        <div className="alert bg-white border-2 border-dashed rounded-5 p-4 d-flex align-items-center gap-4 shadow-sm">
                            <div className="fs-2 text-primary-custom"><i className="bi bi-info-circle-fill"></i></div>
                            <p className="mb-0 fw-bold text-muted">For <span className="text-dark">Only Pick-up</span> or <span className="text-dark">Only Drop-off</span> trips, please contact Sabi directly to check availability and special rates.</p>
                        </div>
                    </div>

                    {/* Right content: Final Summary & Inquire */}
                    <div className="col-lg-4">
                        <div className="booking-sticky position-sticky" style={{ top: '120px' }}>
                            <div className="booking-card card border-0 shadow-2xl rounded-5 overflow-hidden">
                                <div className="card-header bg-dark text-white p-4 d-flex justify-content-between align-items-center">
                                    <h5 className="mb-0 fw-bold">Trip Summary</h5>
                                    <i className="bi bi-info-circle opacity-50"></i>
                                </div>
                                <div className="card-body p-4 bg-light">
                                    <div className="summary-item d-flex justify-content-between py-3 border-bottom border-white">
                                        <span className="text-muted">Route</span>
                                        <span className="fw-bold text-end">{pickup} ➔ {dropoff}</span>
                                    </div>
                                    <div className="summary-item d-flex justify-content-between py-3 border-bottom border-white">
                                        <span className="text-muted">Distance</span>
                                        <span className="fw-bold">{distance} KM</span>
                                    </div>
                                    <div className="summary-item d-flex justify-content-between py-3 border-bottom border-white">
                                        <span className="text-muted">Vehicle</span>
                                        <span className="fw-bold">{vehicle.label}</span>
                                    </div>
                                    <div className="summary-item d-flex justify-content-between py-4">
                                        <h4 className="fw-black mb-0">Total Price</h4>
                                        <h4 className="fw-black text-primary-custom mb-0">${totalPrice}</h4>
                                    </div>

                                    <button
                                        className="btn btn-primary-custom w-100 py-3 rounded-pill fw-black letter-spacing-2 shadow-lg fs-5 mt-2 transition-all"
                                        onClick={handleInquiry}
                                    >
                                        INQUIRE VIA WHATSAPP <i className="bi bi-whatsapp ms-2"></i>
                                    </button>

                                    <a
                                        href={`mailto:sabithan.shaggy@gmail.com?subject=Trip Inquiry: ${pickup} to ${dropoff}&body=Hello Sabi! I'd like to book a trip from ${pickup} to ${dropoff}. Distance: ${distance}KM, Vehicle: ${vehicle.label}. Estimated Price: $${totalPrice}. Please let me know the availability!`}
                                        className="btn btn-outline-dark w-100 py-3 rounded-pill fw-black letter-spacing-2 fs-5 mt-3 transition-all"
                                    >
                                        EMAIL SABI <i className="bi bi-envelope-at ms-2"></i>
                                    </a>

                                    <div className="alert bg-white border-0 shadow-sm rounded-4 mt-4 mb-0">
                                        <p className="small text-muted mb-0">
                                            <i className="bi bi-shield-check text-success me-2"></i>
                                            Prices are approximate and subject to fuel fluctuations.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Help Box */}
                            <div className="help-box mt-4 p-4 rounded-5 bg-dark text-white shadow-xl">
                                <div className="d-flex align-items-center gap-4 mb-3">
                                    <div className="fs-1 text-warning"><i className="bi bi-telephone-outbound"></i></div>
                                    <div>
                                        <h6 className="fw-bold mb-0">Direct Booking</h6>
                                        <p className="small text-white-50 mb-0">+94 77 056 2642</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-4">
                                    <div className="fs-1 text-warning"><i className="bi bi-envelope-at"></i></div>
                                    <div>
                                        <h6 className="fw-bold mb-0">Email Sabi</h6>
                                        <p className="small text-white-50 mb-0">sabithan.shaggy@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourDetails;

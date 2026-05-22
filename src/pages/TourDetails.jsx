import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
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

const locations = ["Colombo", "Sigiriya", "Ella", "Kandy", "Galle", "Yala", "Negombo", "Nuwara Eliya", "Other"];

const travelInterestsOptions = [
    "Adventure Tours", "Honeymoon Tours", "Eco Tours", "Beach Tours", "Family Tours", 
    "Special Tours", "Culture & Heritage Tours", "Hill Country Tours", "Wildlife & Nature Tours"
];

const accommodationOptions = [
    "Ayurvedha Hotels", "Beach Hotels", "Boutique Hotels", "Villas & Bungalows", 
    "Hill Country", "Cultural", "Wildlife", "Eco Lodges", "Camping", 
    "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"
];

const TourDetails = () => {
    // Route state
    const [pickup, setPickup] = useState("Colombo");
    const [dropoff, setDropoff] = useState("Sigiriya");
    const [distance, setDistance] = useState(175);

    // Form state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [adults, setAdults] = useState('');
    const [children, setChildren] = useState('');
    const [infants, setInfants] = useState('');
    const [arrivalDate, setArrivalDate] = useState(null);
    const [departureDate, setDepartureDate] = useState(null);
    const [interests, setInterests] = useState([]);
    const [accommodations, setAccommodations] = useState([]);
    const [comment, setComment] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const key = `${pickup}-${dropoff}`;
        const revKey = `${dropoff}-${pickup}`;
        const dist = routeDistances[key] || routeDistances[revKey] || 150; // default if not found
        setDistance(dist);
    }, [pickup, dropoff]);

    const toggleInterest = (interest) => {
        setInterests(prev => prev.includes(interest) ? prev.filter(i => i !== interest) : [...prev, interest]);
    };

    const toggleAccommodation = (acc) => {
        setAccommodations(prev => prev.includes(acc) ? prev.filter(a => a !== acc) : [...prev, acc]);
    };

    const handleInquiry = (e) => {
        if(e) e.preventDefault();
        
        if(!name || !email || !phone || !arrivalDate || !departureDate) {
            alert("Please fill in all required fields (Name, Email, Phone, Dates).");
            return;
        }

        const message = `Hello Sabi! I'd like to book a custom tour with TripMate.%0A%0A` +
            `*--- Tour Route ---*%0A` +
            `📍 Route: ${pickup} to ${dropoff}%0A` +
            `📏 Approx Distance: ${distance} KM%0A%0A` +
            `*--- Client Details ---*%0A` +
            `👤 Name: ${name}%0A` +
            `✉️ Email: ${email}%0A` +
            `📞 Phone: ${phone}%0A` +
            `🌍 Country: ${country}%0A%0A` +
            `*--- Travel Party ---*%0A` +
            `👨‍👩‍👧 Adults: ${adults || 0}, Children: ${children || 0}, Infants: ${infants || 0}%0A%0A` +
            `*--- Dates ---*%0A` +
            `📅 Arrival: ${arrivalDate.toLocaleDateString()}%0A` +
            `📅 Departure: ${departureDate.toLocaleDateString()}%0A%0A` +
            `*--- Preferences ---*%0A` +
            `🎯 Interests: ${interests.length > 0 ? interests.join(', ') : 'None specified'}%0A` +
            `🏨 Accommodation: ${accommodations.length > 0 ? accommodations.join(', ') : 'None specified'}%0A%0A` +
            `*--- Additional Comments ---*%0A` +
            `${comment || 'None'}%0A%0A` +
            `Please let me know the availability and a price estimate!`;

        window.open(`https://wa.me/94770562642?text=${message}`, '_blank');
    };

    return (
        <div className="tour-details-page bg-light min-vh-100 pb-5">
            {/* Immersive Hero */}
            <section className="tour-hero-section position-relative overflow-hidden" style={{ height: '400px' }}>
                <div className="hero-img-container h-100">
                    <img src={heroImg} alt="Sigiriya" className="w-100 h-100 object-fit-cover shadow-2xl" style={{ filter: 'brightness(0.6)' }} />
                </div>
                <div className="hero-overlay d-flex align-items-end p-5 position-absolute bottom-0 w-100">
                    <div className="container-fluid px-lg-5 mx-auto" style={{ maxWidth: '1400px' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-white mb-4"
                        >
                            <span className="badge rounded-pill bg-warning text-dark px-4 py-2 fw-bold mb-3 shadow-lg">CUSTOM TRIP</span>
                            <h1 className="display-3 fw-black main-title text-white mb-2">Plan Your Journey.</h1>
                            <p className="lead text-white-50 letter-spacing-2 fw-bold small">TAILOR-MADE EXPERIENCES ACROSS SRI LANKA</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className="container-fluid py-5 px-lg-5 mx-auto" style={{ maxWidth: '1400px', marginTop: '-50px', position: 'relative', zIndex: 10 }}>
                <div className="row g-5">
                    {/* Left content: Form */}
                    <div className="col-lg-8">
                        <div className="card border-0 shadow-xl rounded-5 overflow-hidden">
                            <div className="card-header bg-white p-5 border-bottom border-light">
                                <h3 className="fw-black mb-0" style={{ color: 'var(--brand-primary)' }}>Trip Inquiry Form</h3>
                                <p className="text-muted mb-0 mt-2">Fill out the details below and Sabi will get back to you with a personalized itinerary and quote.</p>
                            </div>
                            
                            <div className="card-body p-5">
                                <form onSubmit={handleInquiry}>
                                    <h5 className="fw-bold mb-4 border-bottom pb-2">1. Route Plan</h5>
                                    <div className="row g-4 mb-5">
                                        <div className="col-md-6">
                                            <label className="small fw-bold letter-spacing-1 text-muted mb-2 d-block">PICK-UP LOCATION</label>
                                            <select
                                                className="form-select form-select-lg rounded-4 bg-light border-0"
                                                value={pickup}
                                                onChange={(e) => setPickup(e.target.value)}
                                            >
                                                {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="small fw-bold letter-spacing-1 text-muted mb-2 d-block">DROP-OFF LOCATION</label>
                                            <select
                                                className="form-select form-select-lg rounded-4 bg-light border-0"
                                                value={dropoff}
                                                onChange={(e) => setDropoff(e.target.value)}
                                            >
                                                {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                                            </select>
                                        </div>
                                    </div>

                                    <h5 className="fw-bold mb-4 border-bottom pb-2">2. Personal Details</h5>
                                    <div className="row g-4 mb-5">
                                        <div className="col-md-6">
                                            <label className="small fw-bold letter-spacing-1 text-muted mb-2 d-block">NAME *</label>
                                            <input type="text" className="form-control form-control-lg rounded-4 bg-light border-0" required value={name} onChange={e => setName(e.target.value)} placeholder="Full Name" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="small fw-bold letter-spacing-1 text-muted mb-2 d-block">EMAIL *</label>
                                            <input type="email" className="form-control form-control-lg rounded-4 bg-light border-0" required value={email} onChange={e => setEmail(e.target.value)} placeholder="Email Address" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="small fw-bold letter-spacing-1 text-muted mb-2 d-block">PHONE NO. *</label>
                                            <input type="tel" className="form-control form-control-lg rounded-4 bg-light border-0" required value={phone} onChange={e => setPhone(e.target.value)} placeholder="With country code" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="small fw-bold letter-spacing-1 text-muted mb-2 d-block">COUNTRY</label>
                                            <input type="text" className="form-control form-control-lg rounded-4 bg-light border-0" value={country} onChange={e => setCountry(e.target.value)} placeholder="Your Country" />
                                        </div>
                                    </div>

                                    <h5 className="fw-bold mb-4 border-bottom pb-2">3. Travel Party</h5>
                                    <div className="row g-4 mb-5">
                                        <div className="col-md-4">
                                            <label className="small fw-bold letter-spacing-1 text-muted mb-2 d-block">ADULTS *</label>
                                            <input type="number" min="1" className="form-control form-control-lg rounded-4 bg-light border-0 remove-arrow" required value={adults} onChange={e => setAdults(e.target.value)} placeholder="12+ yrs" />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="small fw-bold letter-spacing-1 text-muted mb-2 d-block">CHILDREN</label>
                                            <input type="number" min="0" className="form-control form-control-lg rounded-4 bg-light border-0 remove-arrow" value={children} onChange={e => setChildren(e.target.value)} placeholder="4-12 yrs" />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="small fw-bold letter-spacing-1 text-muted mb-2 d-block">INFANTS</label>
                                            <input type="number" min="0" className="form-control form-control-lg rounded-4 bg-light border-0 remove-arrow" value={infants} onChange={e => setInfants(e.target.value)} placeholder="0-3 yrs" />
                                        </div>
                                    </div>

                                    <h5 className="fw-bold mb-4 border-bottom pb-2">4. Travel Dates</h5>
                                    <div className="row g-4 mb-5">
                                        <div className="col-md-6">
                                            <label className="small fw-bold letter-spacing-1 text-muted mb-2 d-block">EXPECTED ARRIVAL *</label>
                                            <DatePicker
                                                selected={arrivalDate}
                                                onChange={(date) => setArrivalDate(date)}
                                                className="form-control form-control-lg rounded-4 bg-light border-0 w-100"
                                                placeholderText="Select Arrival Date"
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="small fw-bold letter-spacing-1 text-muted mb-2 d-block">EXPECTED DEPARTURE *</label>
                                            <DatePicker
                                                selected={departureDate}
                                                onChange={(date) => setDepartureDate(date)}
                                                className="form-control form-control-lg rounded-4 bg-light border-0 w-100"
                                                placeholderText="Select Departure Date"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <h5 className="fw-bold mb-4 border-bottom pb-2">5. Traveling Interests</h5>
                                    <div className="row g-3 mb-5">
                                        {travelInterestsOptions.map(interest => (
                                            <div className="col-md-4 col-sm-6" key={interest}>
                                                <div className="form-check custom-checkbox">
                                                    <input 
                                                        className="form-check-input border-2 border-secondary" 
                                                        type="checkbox" 
                                                        id={interest}
                                                        checked={interests.includes(interest)}
                                                        onChange={() => toggleInterest(interest)}
                                                        style={{ cursor: 'pointer' }}
                                                    />
                                                    <label className="form-check-label ms-2 text-muted fw-bold" htmlFor={interest} style={{ cursor: 'pointer' }}>
                                                        {interest}
                                                    </label>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <h5 className="fw-bold mb-4 border-bottom pb-2">6. Accommodation</h5>
                                    <div className="row g-3 mb-5">
                                        {accommodationOptions.map(acc => (
                                            <div className="col-md-4 col-sm-6" key={acc}>
                                                <div className="form-check custom-checkbox">
                                                    <input 
                                                        className="form-check-input border-2 border-secondary" 
                                                        type="checkbox" 
                                                        id={acc}
                                                        checked={accommodations.includes(acc)}
                                                        onChange={() => toggleAccommodation(acc)}
                                                        style={{ cursor: 'pointer' }}
                                                    />
                                                    <label className="form-check-label ms-2 text-muted fw-bold" htmlFor={acc} style={{ cursor: 'pointer' }}>
                                                        {acc}
                                                    </label>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <h5 className="fw-bold mb-4 border-bottom pb-2">7. Additional Comments</h5>
                                    <div className="mb-5">
                                        <textarea 
                                            className="form-control rounded-4 bg-light border-0 p-3" 
                                            rows="5"
                                            value={comment}
                                            onChange={e => setComment(e.target.value)}
                                            placeholder="Any special requests, dietary requirements, or specific places you want to visit?"
                                        ></textarea>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Right content: Final Summary & Contact Sidebar */}
                    <div className="col-lg-4">
                        <div className="booking-sticky position-sticky" style={{ top: '120px' }}>
                            <div className="booking-card card border-0 shadow-xl rounded-5 overflow-hidden mb-4">
                                <div className="card-header bg-dark text-white p-4 d-flex justify-content-between align-items-center">
                                    <h5 className="mb-0 fw-bold">Trip Summary</h5>
                                    <i className="bi bi-info-circle opacity-50"></i>
                                </div>
                                <div className="card-body p-4 bg-white">
                                    <div className="summary-item d-flex justify-content-between py-3 border-bottom border-light">
                                        <span className="text-muted fw-bold">Route</span>
                                        <span className="fw-black text-end">{pickup} ➔ {dropoff}</span>
                                    </div>
                                    <div className="summary-item d-flex justify-content-between py-3 border-bottom border-light">
                                        <span className="text-muted fw-bold">Approx. Distance</span>
                                        <span className="fw-black">{distance} KM</span>
                                    </div>
                                    <div className="summary-item d-flex justify-content-between py-3 border-bottom border-light">
                                        <span className="text-muted fw-bold">Vehicle</span>
                                        <span className="fw-black">Spacious Van</span>
                                    </div>
                                    
                                    <div className="alert bg-orange-subtle border-0 rounded-4 mt-4 p-3 text-center" style={{ background: 'rgba(255,102,0,0.1)' }}>
                                        <p className="mb-0 small fw-bold" style={{ color: 'var(--brand-primary)' }}>Pricing is customized based on your specific requirements. Submit the form for a quote!</p>
                                    </div>

                                    <button
                                        className="btn btn-warning w-100 py-3 rounded-pill fw-black letter-spacing-1 shadow-lg fs-6 mt-4 transition-all"
                                        style={{ background: 'var(--brand-primary)', border: 'none', color: '#fff' }}
                                        onClick={handleInquiry}
                                    >
                                        SUBMIT INQUIRY <i className="bi bi-send ms-2"></i>
                                    </button>
                                </div>
                            </div>

                            {/* Help Box */}
                            <div className="help-box p-4 rounded-5 bg-dark text-white shadow-xl">
                                <h6 className="fw-bold mb-4 letter-spacing-1 text-white-50">DIRECT CONTACT</h6>
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <div className="fs-3 text-warning"><i className="bi bi-whatsapp"></i></div>
                                    <div>
                                        <h6 className="fw-bold mb-0">WhatsApp Sabi</h6>
                                        <p className="small text-white-50 mb-0">+94 77 056 2642</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <div className="fs-3 text-warning"><i className="bi bi-envelope-at"></i></div>
                                    <div>
                                        <h6 className="fw-bold mb-0">Email Directly</h6>
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

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './PopularDestinations.css';

// Import high-quality local assets
import sigiriyaImg from "../assets/sigiriya-sl.jpg";
import ellaImg from "../assets/ella-sl.jpg";
import galleImg from "../assets/galle-sl.jpg";
import nuwaraImg from "../assets/nuwaraeliya-sl.jpg";
import yalaImg from "../assets/yalanationalpark-sl.jpg";
import kandyImg from "../assets/kandy-sl.jpg";
import mirissaImg from "../assets/mirissa-sl.jpg";
import trincoImg from "../assets/trinco-sl.jpg";
import anuradhapuraImg from "../assets/anuradhapura-sl.jpg";
import udawalaweImg from "../assets/udawalawa-sl.jpg";

const destinations = [
    {
        id: 1,
        name: "Sigiriya",
        sub: "Lion Rock",
        description: "Climb the ancient rock fortress and witness the breathtaking dawn of history.",
        rating: "5.0",
        image: sigiriyaImg
    },
    {
        id: 2,
        name: "Ella",
        sub: "Highlands",
        description: "Experience the misty peaks and the iconic Nine Arch Bridge in this mountain paradise.",
        rating: "4.9",
        image: ellaImg
    },
    {
        id: 3,
        name: "Galle Fort",
        sub: "Coastal Heritage",
        description: "Walk the ramparts of a colonial fortress where history meets the Indian Ocean.",
        rating: "5.0",
        image: galleImg
    },
    {
        id: 4,
        name: "Nuwara Eliya",
        sub: "Little England",
        description: "Cool winds and rolling tea estates await in the emerald heart of Sri Lanka.",
        rating: "4.8",
        image: nuwaraImg
    },
    {
        id: 5,
        name: "Yala National Park",
        sub: "Wildlife Safari",
        description: "The land of the leopard. Witness the wild in its purest, untamed form.",
        rating: "5.0",
        image: yalaImg
    },
    {
        id: 6,
        name: "Kandy",
        sub: "Royal City",
        description: "The cultural soul of the nation, home to the sacred Temple of the Tooth.",
        rating: "4.9",
        image: kandyImg
    },
    {
        id: 7,
        name: "Mirissa",
        sub: "Beach Paradise",
        description: "Golden sands and whale watching. The ultimate tropical escape.",
        rating: "5.0",
        image: mirissaImg
    },
    {
        id: 8,
        name: "Trincomalee",
        sub: "East Coast",
        description: "Pristine white beaches and shallow blue waters of Nilaveli.",
        rating: "4.8",
        image: trincoImg
    },
    {
        id: 9,
        name: "Anuradhapura",
        sub: "Sacred City",
        description: "Ancient ruins and towering stupas that tell the story of a golden civilization.",
        rating: "4.9",
        image: anuradhapuraImg
    },
    {
        id: 10,
        name: "Udawalawe National Park",
        sub: "Elephant Park",
        description: "Get up close with herds of majestic elephants in their natural habitat.",
        rating: "5.0",
        image: udawalaweImg
    }
];

const PopularDestinations = () => {
    return (
        <section id="popular-destinations" className="popular-destinations py-5 bg-white">
            <div className="container-fluid py-5 px-lg-5 mx-auto" style={{ maxWidth: '1400px' }}>
                <div className="d-flex justify-content-between align-items-end mb-5">
                    <div className="header-container">
                        <span className="text-uppercase small fw-bold letter-spacing-2 d-flex align-items-center gap-2 mb-3">
                            <i className="bi bi-map-fill" style={{ color: '#ff6600' }}></i> Recommended
                        </span>
                        <h2 className="display-1 fw-black main-title mb-0">Our Tours.</h2>
                        <span className="text-muted fw-medium mt-2 d-block">Handpicked Destinations</span>
                    </div>
                    <div className="swiper-nav-buttons d-flex gap-2 mb-3">
                        <button className="swiper-button-prev-custom rounded-circle border-0 d-flex align-items-center justify-content-center">
                            <i className="bi bi-chevron-left"></i>
                        </button>
                        <button className="swiper-button-next-custom rounded-circle border-0 d-flex align-items-center justify-content-center">
                            <i className="bi bi-chevron-right"></i>
                        </button>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={{
                        prevEl: '.swiper-button-prev-custom',
                        nextEl: '.swiper-button-next-custom',
                    }}
                    autoplay={{ delay: 5000 }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1200: { slidesPerView: 2.5 }
                    }}
                    className="destinations-swiper"
                >
                    {destinations.map((dest) => (
                        <SwiperSlide key={dest.id}>
                            <div className="destination-card position-relative overflow-hidden rounded-5 shadow-lg">
                                <img src={dest.image} alt={dest.name} className="card-bg w-100 h-100 object-fit-cover position-absolute top-0 start-0" />
                                <div className="card-overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-5">
                                    <span className="text-white-50 mb-2 fw-medium">{dest.sub}</span>
                                    <div className="d-flex align-items-baseline gap-2 mb-3">
                                        <h3 className="text-white display-5 fw-bold mb-0">{dest.name}</h3>
                                        <div className="rating-pill d-flex align-items-center gap-1 px-3 py-1 rounded-pill bg-white bg-opacity-75 text-dark fw-bold small shadow-sm">
                                            {dest.rating} <i className="bi bi-star-fill text-warning"></i>
                                        </div>
                                    </div>
                                    <p className="text-white-50 lead mb-4 pe-lg-5">{dest.description}</p>
                                    <button className="btn btn-tour rounded-pill px-5 py-3 fw-bold shadow-sm d-flex align-items-center justify-content-center">
                                        View tour
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default PopularDestinations;

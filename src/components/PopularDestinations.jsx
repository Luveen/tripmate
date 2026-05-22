import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './PopularDestinations.css';
import DestinationModal from './DestinationModal';

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

// Extra images for gallery variation
import tripmate1 from "../assets/TripMate1.jpeg";
import tripmate2 from "../assets/TripMate2.jpeg";
import tripmate3 from "../assets/TripMate3.jpeg";
import tripmate4 from "../assets/TripMate4.jpeg";
import tripmate5 from "../assets/TripMate5.jpeg";
import tripmate6 from "../assets/TripMate6.jpeg";
import tripmate7 from "../assets/TripMate7.jpeg";
import tripmate8 from "../assets/TripMate8.jpeg";

const destinations = [
    {
        id: 1,
        name: "Sigiriya",
        sub: "Lion Rock",
        description: "Climb the ancient rock fortress and witness the breathtaking dawn of history.",
        longDescription: "Sigiriya, the iconic Lion Rock, is a UNESCO World Heritage Site and one of Asia's greatest archaeological wonders. Rising 200 meters above the lush jungle canopy, this ancient rock fortress was built by King Kashyapa in the 5th century AD. The climb reveals stunning frescoes of celestial maidens, the famous Mirror Wall, and breathtaking panoramic views of the surrounding countryside from the summit.",
        rating: "5.0",
        image: sigiriyaImg,
        gallery: [sigiriyaImg, tripmate1, tripmate5, tripmate7],
        bestTime: "January – April",
        duration: "Half Day",
        distanceFromColombo: "175 KM",
        mustSee: ["Lion's Paw Entrance", "Mirror Wall", "Sigiriya Frescoes", "Summit Palace Ruins", "Royal Water Gardens"],
        highlights: [
            "Climb the 1,200 steps to the summit for a 360° panoramic view of the jungle.",
            "Marvel at the ancient frescoes of celestial maidens painted over 1,500 years ago.",
            "Explore the sophisticated water gardens and hydraulic engineering of a bygone era.",
            "Witness the golden sunrise from the top — an unforgettable, once-in-a-lifetime experience."
        ]
    },
    {
        id: 2,
        name: "Ella",
        sub: "Highlands",
        description: "Experience the misty peaks and the iconic Nine Arch Bridge in this mountain paradise.",
        longDescription: "Nestled among misty green peaks, Ella is a small highland town that has become one of Sri Lanka's most beloved travel destinations. Famous for its tea plantations, dramatic waterfalls, and the iconic Nine Arch Bridge — an engineering marvel of the colonial era — Ella offers the perfect blend of adventure and tranquility. Hike Little Adam's Peak at sunrise for a magical start to the day.",
        rating: "4.9",
        image: ellaImg,
        gallery: [ellaImg, tripmate3, tripmate6, tripmate8],
        bestTime: "February – April",
        duration: "1–2 Days",
        distanceFromColombo: "205 KM",
        mustSee: ["Nine Arch Bridge", "Little Adam's Peak", "Ella Rock", "Ravana Falls", "Demodara Loop"],
        highlights: [
            "Watch the train cross the legendary Nine Arch Bridge, surrounded by tea plantations.",
            "Hike Little Adam's Peak for sweeping views of the Ella Gap at sunrise.",
            "Swim in the natural pool at Ravana Falls, one of Sri Lanka's tallest waterfalls.",
            "Take the scenic Kandy-to-Ella train ride — rated among the world's most beautiful rail journeys."
        ]
    },
    {
        id: 3,
        name: "Galle Fort",
        sub: "Coastal Heritage",
        description: "Walk the ramparts of a colonial fortress where history meets the Indian Ocean.",
        longDescription: "Galle Fort is a UNESCO-listed 17th-century Dutch colonial fortress perched on the southwestern tip of Sri Lanka. Its cobblestone streets are lined with boutique hotels, art galleries, charming cafes, and centuries-old churches. Walking the ancient ramparts at sunset, with the Indian Ocean crashing against the walls, is one of the most romantic experiences in all of Sri Lanka.",
        rating: "5.0",
        image: galleImg,
        gallery: [galleImg, tripmate2, tripmate4, mirissaImg],
        bestTime: "December – March",
        duration: "Half Day – 1 Day",
        distanceFromColombo: "125 KM",
        mustSee: ["Fort Ramparts", "Galle Lighthouse", "Dutch Reformed Church", "Maritime Museum", "Flag Rock"],
        highlights: [
            "Stroll along the iconic fort ramparts during a golden sunset over the Indian Ocean.",
            "Discover boutique shops, local art galleries, and colonial-era architecture within the fort.",
            "Watch daring cliff jumpers at Flag Rock as waves crash below.",
            "Visit the historic Galle Lighthouse, one of the oldest in Sri Lanka."
        ]
    },
    {
        id: 4,
        name: "Nuwara Eliya",
        sub: "Little England",
        description: "Cool winds and rolling tea estates await in the emerald heart of Sri Lanka.",
        longDescription: "Known as 'Little England' for its colonial charm and cool climate, Nuwara Eliya sits at an elevation of 1,868 meters surrounded by an endless sea of emerald tea estates. The town offers a refreshing escape from tropical heat with its misty mornings, Victorian-era bungalows, manicured gardens, and world-class Ceylon tea factories where you can witness the craft of tea-making firsthand.",
        rating: "4.8",
        image: nuwaraImg,
        gallery: [nuwaraImg, tripmate7, ellaImg, tripmate3],
        bestTime: "March – May",
        duration: "1–2 Days",
        distanceFromColombo: "165 KM",
        mustSee: ["Gregory Lake", "Hakgala Botanical Garden", "Pedro Tea Estate", "Victoria Park", "Seetha Amman Temple"],
        highlights: [
            "Tour a working tea factory and sample the finest fresh Ceylon tea straight from the source.",
            "Enjoy a peaceful boat ride on the scenic Gregory Lake surrounded by hills.",
            "Explore the stunning Hakgala Botanical Garden with its exotic orchid collection.",
            "Experience the charming colonial architecture and cool mountain climate year-round."
        ]
    },
    {
        id: 5,
        name: "Yala National Park",
        sub: "Wildlife Safari",
        description: "The land of the leopard. Witness the wild in its purest, untamed form.",
        longDescription: "Yala National Park is Sri Lanka's most famous wildlife sanctuary and home to the highest density of leopards in the world. Covering nearly 1,000 square kilometers of forest, scrubland, and coastline, Yala is a must-visit for any wildlife enthusiast. An early morning safari here gives you the chance to spot leopards, elephants, sloth bears, crocodiles, and hundreds of bird species in their natural habitat.",
        rating: "5.0",
        image: yalaImg,
        gallery: [yalaImg, udawalaweImg, tripmate1, tripmate5],
        bestTime: "February – July",
        duration: "Full Day Safari",
        distanceFromColombo: "260 KM",
        mustSee: ["Leopard Sightings", "Elephant Herds", "Sithulpawwa Rock Temple", "Yala Beach", "Bird Watching Zones"],
        highlights: [
            "Spot the elusive Sri Lankan leopard — Yala has the highest leopard density on Earth.",
            "Encounter herds of wild elephants, sloth bears, and saltwater crocodiles.",
            "Explore the ancient Sithulpawwa Rock Temple hidden deep within the park.",
            "Witness a spectacular sunset over the untouched Yala coastline."
        ]
    },
    {
        id: 6,
        name: "Kandy",
        sub: "Royal City",
        description: "The cultural soul of the nation, home to the sacred Temple of the Tooth.",
        longDescription: "Kandy, the last royal capital of Sri Lanka, is a city of deep cultural and spiritual significance. Nestled in the hills and centered around a tranquil lake, Kandy is home to the Temple of the Sacred Tooth Relic — one of the most important Buddhist pilgrimage sites in the world. The city comes alive during the annual Esala Perahera festival, a spectacular procession of dancers, drummers, and decorated elephants.",
        rating: "4.9",
        image: kandyImg,
        gallery: [kandyImg, tripmate2, tripmate6, nuwaraImg],
        bestTime: "January – April",
        duration: "1–2 Days",
        distanceFromColombo: "115 KM",
        mustSee: ["Temple of the Tooth", "Kandy Lake", "Royal Botanical Gardens", "Bahirawakanda Temple", "Kandy Market"],
        highlights: [
            "Visit the sacred Temple of the Tooth Relic, a UNESCO World Heritage Site.",
            "Walk through the world-renowned Royal Botanical Gardens of Peradeniya.",
            "Experience the famous Kandyan dance performance — a cultural spectacle.",
            "Witness the Esala Perahera festival with grand elephant processions (July/August)."
        ]
    },
    {
        id: 7,
        name: "Mirissa",
        sub: "Beach Paradise",
        description: "Golden sands and whale watching. The ultimate tropical escape.",
        longDescription: "Mirissa is a dreamy beach destination on Sri Lanka's southern coast, famous for its golden crescent-shaped bay, swaying palm trees, and crystal-clear waters. It's also one of the best places in the world for blue whale and dolphin watching. Whether you're lounging on the beach, surfing gentle waves, or heading out on an ocean safari, Mirissa offers the quintessential tropical paradise experience.",
        rating: "5.0",
        image: mirissaImg,
        gallery: [mirissaImg, galleImg, tripmate4, tripmate8],
        bestTime: "November – April",
        duration: "1–3 Days",
        distanceFromColombo: "150 KM",
        mustSee: ["Mirissa Beach", "Whale Watching", "Coconut Tree Hill", "Parrot Rock", "Secret Beach"],
        highlights: [
            "Go on a thrilling whale and dolphin watching boat safari in the Indian Ocean.",
            "Relax on the iconic Mirissa Beach with its palm-fringed golden sands.",
            "Climb Coconut Tree Hill for the most Instagrammable sunset view in Sri Lanka.",
            "Surf beginner-friendly waves or snorkel in the clear coastal waters."
        ]
    },
    {
        id: 8,
        name: "Trincomalee",
        sub: "East Coast",
        description: "Pristine white beaches and shallow blue waters of Nilaveli.",
        longDescription: "Trincomalee on Sri Lanka's east coast is a hidden gem of natural beauty and history. Its world-class beaches, especially Nilaveli and Marble Beach, feature powder-white sand and calm turquoise waters. The area is also home to Koneswaram Temple, perched dramatically on Swami Rock, and Pigeon Island — a marine sanctuary perfect for snorkeling among coral reefs and reef sharks.",
        rating: "4.8",
        image: trincoImg,
        gallery: [trincoImg, mirissaImg, tripmate1, tripmate3],
        bestTime: "May – September",
        duration: "2–3 Days",
        distanceFromColombo: "260 KM",
        mustSee: ["Nilaveli Beach", "Pigeon Island", "Koneswaram Temple", "Marble Beach", "Hot Springs"],
        highlights: [
            "Snorkel at Pigeon Island National Park among colorful reef fish and blacktip sharks.",
            "Visit the Koneswaram Temple perched on dramatic Swami Rock cliffs.",
            "Swim in the calm, crystal-clear waters of Nilaveli — one of Asia's best beaches.",
            "Explore the natural hot springs at Kanniya, believed to have healing properties."
        ]
    },
    {
        id: 9,
        name: "Anuradhapura",
        sub: "Sacred City",
        description: "Ancient ruins and towering stupas that tell the story of a golden civilization.",
        longDescription: "Anuradhapura was Sri Lanka's first great capital and one of the oldest continuously inhabited cities in the world, dating back over 2,500 years. This UNESCO World Heritage Site is home to massive ancient stupas (dagobas), sacred bodhi trees, intricately carved moonstones, and sprawling monastic complexes. It's a pilgrimage destination and a portal into the magnificent history of one of Asia's greatest ancient civilizations.",
        rating: "4.9",
        image: anuradhapuraImg,
        gallery: [anuradhapuraImg, kandyImg, tripmate2, tripmate7],
        bestTime: "January – March",
        duration: "1 Day",
        distanceFromColombo: "200 KM",
        mustSee: ["Sri Maha Bodhi", "Ruwanwelisaya Stupa", "Jetavanaramaya", "Thuparamaya", "Twin Ponds (Kuttam Pokuna)"],
        highlights: [
            "Visit the Sri Maha Bodhi — the oldest historically documented tree in the world.",
            "Marvel at Ruwanwelisaya, a gleaming white stupa standing 103 meters tall.",
            "Explore Jetavanaramaya, once the tallest brick structure in the ancient world.",
            "Cycle through the ancient ruins of a civilization spanning over two millennia."
        ]
    },
    {
        id: 10,
        name: "Udawalawe",
        sub: "Elephant Park",
        description: "Get up close with herds of majestic elephants in their natural habitat.",
        longDescription: "Udawalawe National Park is Sri Lanka's premier destination for elephant encounters. Home to over 700 wild elephants, the park offers almost guaranteed sightings of these majestic creatures grazing in open grasslands, bathing in rivers, and roaming with their calves. The nearby Elephant Transit Home rehabilitates orphaned baby elephants before releasing them back into the wild — a heartwarming experience not to be missed.",
        rating: "5.0",
        image: udawalaweImg,
        gallery: [udawalaweImg, yalaImg, tripmate5, tripmate6],
        bestTime: "Year-Round",
        duration: "Half Day Safari",
        distanceFromColombo: "170 KM",
        mustSee: ["Elephant Herds", "Elephant Transit Home", "Udawalawe Reservoir", "Bird Watching", "Water Buffalo Sightings"],
        highlights: [
            "Spot herds of 50+ wild elephants roaming freely across the open grasslands.",
            "Visit the Elephant Transit Home and watch baby elephants being fed and rehabilitated.",
            "Enjoy a jeep safari with stunning views of the massive Udawalawe Reservoir.",
            "Photograph exotic bird species including eagles, kingfishers, and painted storks."
        ]
    }
];

const PopularDestinations = () => {
    const [selectedDest, setSelectedDest] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const handleViewTour = (dest) => {
        setSelectedDest(dest);
        setModalOpen(true);
    };

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
                                    <button
                                        className="btn btn-tour rounded-pill px-5 py-3 fw-bold shadow-sm d-flex align-items-center justify-content-center"
                                        onClick={() => handleViewTour(dest)}
                                    >
                                        View tour
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Destination Detail Modal */}
            <DestinationModal
                destination={selectedDest}
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
            />
        </section>
    );
};

export default PopularDestinations;

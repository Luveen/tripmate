import React from 'react';
import { motion } from 'motion/react';
import './SketchDivider.css';

const vehicles = [
    { icon: "bi-bicycle", duration: 25, delay: 0 },
    { icon: "bi-car-front-fill", duration: 25, delay: 6 },
    { icon: "bi-truck-flatbed", duration: 25, delay: 12 },
    { icon: "bi-bus-front-fill", duration: 25, delay: 18 }
];

const SketchDivider = () => {
    // Standardized road path with sufficient headroom and width
    const roadD = "M -50 100 Q 150 60 400 110 T 800 90 T 1200 130 T 1550 110";

    return (
        <div className="sketch-divider-container">
            <svg viewBox="0 0 1500 200" preserveAspectRatio="none" className="sketch-svg">
                {/* Pencil Sketch Effect - Multiple slightly offset paths */}
                <path d={roadD} className="sketch-path line-1" />
                <path d={roadD} className="sketch-path line-2" />
                <path d={roadD} className="sketch-path line-3" />

                {/* Animated Vehicles following the path */}
                {vehicles.map((veh, idx) => (
                    <motion.g
                        key={idx}
                        initial={{ offsetDistance: "0%", offsetPath: `path("${roadD}")` }}
                        animate={{ offsetDistance: "100%" }}
                        transition={{
                            duration: veh.duration,
                            repeat: Infinity,
                            ease: "linear",
                            delay: veh.delay,
                            repeatDelay: 0
                        }}
                        className="vehicle-icon-group"
                        style={{ offsetRotate: "auto" }}
                    >
                        <foreignObject width="60" height="60" x="-30" y="-40">
                            <div className="vehicle-wrapper">
                                <i className={`bi ${veh.icon} vehicle-icon`}></i>
                            </div>
                        </foreignObject>
                    </motion.g>
                ))}
            </svg>
        </div>
    );
};

export default SketchDivider;

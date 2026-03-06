import React, { useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './booking-form.css';

const destinations = [
  { value: 'mirissa', label: 'Mirissa' },
  { value: 'ella', label: 'Ella' },
  { value: 'sigiriya', label: 'Sigiriya' },
  { value: 'nuwaraeliya', label: 'Nuwara Eliya' },
  { value: 'kandy', label: 'Kandy' },
  { value: 'colombo', label: 'Colombo' },
  { value: 'galle', label: 'Galle' },
  { value: 'anuradhapura', label: 'Anuradhapura' },
  { value: 'polonnaruwa', label: 'Polonnaruwa' },
  { value: 'trincomalee', label: 'Trincomalee' },
  { value: 'jaffna', label: 'Jaffna' },
  { value: 'arugambay', label: 'Arugam Bay' },
  { value: 'bentota', label: 'Bentota' },
  { value: 'unawatuna', label: 'Unawatuna' },
  { value: 'hikaduwa', label: 'Hikkaduwa' },
  { value: 'dambulla', label: 'Dambulla' },
  { value: 'yala', label: 'Yala National Park' },
  { value: 'udawalawe', label: 'Udawalawe National Park' },
  { value: 'wilpattu', label: 'Wilpattu National Park' },
  { value: 'adampeak', label: 'Adam’s Peak (Sri Pada)' },
  { value: 'kitulgala', label: 'Kitulgala' },
  { value: 'negombo', label: 'Negombo' },
  { value: 'matara', label: 'Matara' },
  { value: 'hambantota', label: 'Hambantota' },
  { value: 'kalpitiya', label: 'Kalpitiya' },
  { value: 'badulla', label: 'Badulla' },
  { value: 'ratnapura', label: 'Ratnapura' },
  { value: 'pasikudah', label: 'Pasikudah' },
  { value: 'mountlavinia', label: 'Mount Lavinia' }
];

const vehicleTypes = [
  { value: 'tuktuk', label: 'TukTuk (3 seater)' },
  { value: 'scooter', label: 'Scooter (2 seater)' },
  { value: 'sedan', label: 'Sedan (4 seater)' },
  { value: 'luxury_suv', label: 'Luxury SUV (5 seater)' },
  { value: 'van', label: 'Van (9-14 seater)' }
];

import { motion } from "motion/react";

function BookingForm() {
  const [startPoint, setStartPoint] = useState(null);
  const [endPoint, setEndPoint] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [passengers, setPassengers] = useState(1);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!startPoint || !endPoint || !startDate) {
      alert("Please fill in the core trip details!");
      return;
    }

    const message = `Hello Sabi! I'd like to book a trip with TripMate.%0A%0A` +
      `📍 From: ${startPoint.label}%0A` +
      `🏁 To: ${endPoint.label}%0A` +
      `📅 Start Date: ${startDate.toLocaleDateString()}%0A` +
      `📅 End Date: ${endDate ? endDate.toLocaleDateString() : 'Pick-up only'}%0A` +
      `🚗 Vehicle: ${selectedVehicle ? selectedVehicle.label : 'Any'}%0A` +
      `👥 Passengers: ${passengers}%0A%0A` +
      `Please let me know the availability!`;

    // Direct to WhatsApp (Sabi's direct number)
    window.open(`https://wa.me/94770562642?text=${message}`, '_blank');
  };

  return (
    <motion.form
      className="booking-form container p-4 rounded-5 shadow-2xl border border-white border-opacity-10 bg-white bg-opacity-20"
      id="booking"
      style={{ backdropFilter: 'blur(30px)' }}
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
    >
      <div className="row g-4 align-items-end justify-content-center">
        {/* Destinations */}
        <div className="col-lg-2">
          <label className="small fw-bold letter-spacing-2 text-white-50 ms-2 mb-2 d-block">FROM</label>
          <Select
            options={destinations}
            value={startPoint}
            onChange={setStartPoint}
            placeholder="Starting Loc"
            className="react-select-container shadow-sm"
            classNamePrefix="react-select"
            menuPortalTarget={document.body}
            styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
          />
        </div>

        <div className="col-lg-2">
          <label className="small fw-bold letter-spacing-2 text-white-50 ms-2 mb-2 d-block">TO</label>
          <Select
            options={destinations}
            value={endPoint}
            onChange={setEndPoint}
            placeholder="Ending Loc"
            className="react-select-container shadow-sm"
            classNamePrefix="react-select"
            menuPortalTarget={document.body}
            styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
          />
        </div>

        {/* Vehicle & Passengers */}
        <div className="col-lg-2">
          <label className="small fw-bold letter-spacing-2 text-white-50 ms-2 mb-2 d-block">VEHICLE</label>
          <Select
            options={vehicleTypes}
            value={selectedVehicle}
            onChange={setSelectedVehicle}
            placeholder="Select Car"
            className="react-select-container shadow-sm"
            classNamePrefix="react-select"
            menuPortalTarget={document.body}
            styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
          />
        </div>

        <div className="col-lg-1">
          <label className="small fw-bold letter-spacing-2 text-white-50 ms-2 mb-2 d-block">PEOPLE</label>
          <input
            type="number"
            min="1"
            max="15"
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
            className="form-control rounded-4 border-0 bg-white shadow-sm py-2 px-3 fw-bold"
          />
        </div>

        {/* Dates */}
        <div className="col-lg-2">
          <label className="small fw-bold letter-spacing-2 text-white-50 ms-2 mb-2 d-block">DATES</label>
          <div className="d-flex gap-2">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Start"
              className="form-control rounded-4 border-0 bg-white shadow-sm py-2 px-3 fw-bold small flex-fill"
            />
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              placeholderText="End"
              className="form-control rounded-4 border-0 bg-white shadow-sm py-2 px-3 fw-bold small flex-fill"
            />
          </div>
        </div>

        <div className="col-lg-2">
          <motion.button
            type="submit"
            className="btn btn-warning w-100 rounded-pill fw-black py-2 shadow-lg letter-spacing-1 small"
            style={{ background: '#ff6600', border: 'none', color: '#fff' }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255,102,0,0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            CONTACT <i className="bi bi-whatsapp ms-1"></i>
          </motion.button>
        </div>
      </div>
    </motion.form>
  );
}

export default BookingForm;
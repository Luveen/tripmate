import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './booking-form.css';

const destinations = [
  "Mirissa", "Ella", "Sigiriya", "Nuwara Eliya", "Kandy", "Colombo", "Galle",
  "Anuradhapura", "Polonnaruwa", "Trincomalee", "Jaffna", "Arugam Bay", "Bentota",
  "Unawatuna", "Hikkaduwa", "Dambulla", "Yala National Park", "Udawalawe National Park",
  "Wilpattu National Park", "Adam’s Peak (Sri Pada)", "Kitulgala", "Negombo", "Matara",
  "Hambantota", "Kalpitiya", "Badulla", "Ratnapura", "Pasikudah", "Mount Lavinia"
];

const vehicleTypes = [
  "TukTuk (3 seater)",
  "Scooter (2 seater)",
  "Sedan (4 seater)",
  "Luxury SUV (5 seater)",
  "Van (9-14 seater)"
];

function BookingForm() {
  const [startPoint, setStartPoint] = useState('');
  const [endPoint, setEndPoint] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!startPoint || !endPoint || !startDate) {
      alert("Please fill in the core trip details (From, To, and Start Date)!");
      return;
    }

    const message = `Hello Sabi! I'd like to book a trip with TripMate.%0A%0A` +
      `📍 From: ${startPoint}%0A` +
      `🏁 To: ${endPoint}%0A` +
      `📅 Start Date: ${startDate.toLocaleDateString()}%0A` +
      `📅 End Date: ${endDate ? endDate.toLocaleDateString() : 'Pick-up only'}%0A` +
      `🚗 Vehicle: ${selectedVehicle || 'Any'}%0A` +
      `👥 Passengers: ${passengers}%0A%0A` +
      `Please let me know the availability!`;

    // Direct to WhatsApp (Sabi's direct number)
    window.open(`https://wa.me/94770562642?text=${message}`, '_blank');
  };

  return (
    <form
      className="booking-form booking-form-bg container p-4 rounded-5 shadow-2xl border border-white border-opacity-10"
      id="booking"
      onSubmit={handleSubmit}
    >
      <div className="row g-4 align-items-end justify-content-center">
        {/* Destinations */}
        <div className="col-lg-2">
          <label className="small fw-bold letter-spacing-2 text-white-50 ms-2 mb-2 d-block">FROM</label>
          <select
            value={startPoint}
            onChange={(e) => setStartPoint(e.target.value)}
            className="form-select rounded-4 border-0 bg-white shadow-sm px-3 fw-bold small text-dark"
            style={{ height: '40px', fontSize: '0.95rem' }}
          >
            <option value="" disabled>Starting Loc</option>
            {destinations.map(dest => (
              <option key={dest} value={dest}>{dest}</option>
            ))}
          </select>
        </div>

        <div className="col-lg-2">
          <label className="small fw-bold letter-spacing-2 text-white-50 ms-2 mb-2 d-block">TO</label>
          <select
            value={endPoint}
            onChange={(e) => setEndPoint(e.target.value)}
            className="form-select rounded-4 border-0 bg-white shadow-sm px-3 fw-bold small text-dark"
            style={{ height: '40px', fontSize: '0.95rem' }}
          >
            <option value="" disabled>Ending Loc</option>
            {destinations.map(dest => (
              <option key={dest} value={dest}>{dest}</option>
            ))}
          </select>
        </div>

        {/* Vehicle & Passengers */}
        <div className="col-lg-2">
          <label className="small fw-bold letter-spacing-2 text-white-50 ms-2 mb-2 d-block">VEHICLE</label>
          <select
            value={selectedVehicle}
            onChange={(e) => setSelectedVehicle(e.target.value)}
            className="form-select rounded-4 border-0 bg-white shadow-sm px-3 fw-bold small text-dark"
            style={{ height: '40px', fontSize: '0.95rem' }}
          >
            <option value="" disabled>Select Car</option>
            {vehicleTypes.map(v => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>
        </div>

        <div className="col-lg-1">
          <label className="small fw-bold letter-spacing-2 text-white-50 ms-2 mb-2 d-block">PEOPLE</label>
          <input
            type="number"
            min="1"
            max="15"
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
            className="form-control rounded-4 border-0 bg-white shadow-sm px-3 fw-bold text-dark"
            style={{ height: '40px', fontSize: '0.95rem' }}
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
              className="form-control rounded-4 border-0 bg-white shadow-sm px-3 fw-bold small flex-fill text-dark"
              style={{ height: '40px' }}
            />
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              placeholderText="End"
              className="form-control rounded-4 border-0 bg-white shadow-sm px-3 fw-bold small flex-fill text-dark"
              style={{ height: '40px' }}
            />
          </div>
        </div>

        <div className="col-lg-2">
          <button
            type="submit"
            className="btn btn-warning w-100 rounded-pill fw-black shadow-lg letter-spacing-1 small btn-contact"
            style={{ background: '#ff6600', border: 'none', color: '#fff', height: '40px' }}
          >
            CONTACT <i className="bi bi-whatsapp ms-1"></i>
          </button>
        </div>
      </div>
    </form>
  );
}

export default BookingForm;
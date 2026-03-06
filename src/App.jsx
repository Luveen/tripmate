import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import TourDetails from './pages/TourDetails';
import Destinations from './pages/Destinations';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tour-details" element={<TourDetails />} />
            <Route path="/destinations" element={<Destinations />} />
          </Routes>
        </main>
        <Footer />
        <SpeedInsights />
      </div>
    </Router>
  );
}

export default App;

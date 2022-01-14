import React from 'react';
import './App.css';
import NavbarCrowStream from './components/Navbar';
import Footer from './components/Footer';
import ControlledCarousel from './components/Carousel';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LoginCrowStream from './components/Login';


function App() {
  return (
    <div className="App">
      <NavbarCrowStream/>
      <Routes>
        <Route path="/" element={<ControlledCarousel />} />
        <Route path="/login" element={<LoginCrowStream />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

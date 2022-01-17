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
import VideoRow from './components/VideoRow';
import {Catalogue} from './views/catalogue';

function App() {
  return (
    <div className="App">
      <NavbarCrowStream/>
      <Routes>
        <Route path="/" element={<ControlledCarousel />} />
        <Route path="/login" element={<LoginCrowStream />} />
        <Route path="/home" element={<Catalogue />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

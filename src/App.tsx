import React from 'react';
import './App.css';
import NavbarCrowStream from './components/Navbar';
import Footer from './components/Footer';
import ControlledCarousel from './components/Carousel';
import LoginCrowStream from './components/Login';
import SignInCrowStream from './components/SignIn';
import VideoPlayer from './components/VideoPlayer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <NavbarCrowStream/>
      <Routes>
        <Route path="/" element={<ControlledCarousel />} />
        <Route path="/login" element={<LoginCrowStream />} />
        <Route path="/signin" element={<SignInCrowStream />} />
        <Route path="/video" element={<VideoPlayer />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

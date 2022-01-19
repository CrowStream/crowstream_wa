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
import VideoRow from './components/VideoRow';
import {Catalogue} from './views/catalogue';
import ProfilesPanel from './views/profiles';

function App() {
  return (
    <div className="App">
      <NavbarCrowStream/>
      <Routes>
        <Route path="/" element={<ControlledCarousel />} />
        <Route path="/login" element={<LoginCrowStream />} />
        <Route path="/signin" element={<SignInCrowStream />} />
        
        {/* <Route path="/video" element={<VideoPlayer episode={{
          id: 0,
          poster: 'https://storage.googleapis.com/crowstream-data/CatalogueImages/django_unchained_2012.jpeg',
          video: 'https://storage.googleapis.com/crowstream-data/CatalogueVideos/django_unchained_2012.mp4'
        }} />} /> */}
        <Route path="/home" element={<Catalogue />}/>
        <Route path="/profiles" element={<ProfilesPanel />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

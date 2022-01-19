////"start": "HTTPS=true SSL_CRT_FILE=./crowstream.crt SSL_KEY_FILE=./crowstream.key react-scripts start",
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
import { Reproduction } from './views/reproduction';
//import ProfilesPanel from './views/profiles';
import {store} from './redux/store';
import { Provider } from 'react-redux';


function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <NavbarCrowStream/>
      <Routes>
        <Route path="/" element={<ControlledCarousel />} />
        <Route path="/login" element={<LoginCrowStream />} />
        <Route path="/signin" element={<SignInCrowStream />} />
        <Route path="/video" element={<Reproduction/>}/>
        <Route path="/home" element={<Catalogue />}/>
      </Routes>
      <Footer/>
    </Provider>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import NavbarCrowStream from './components/Navbar';
import Footer from './components/Footer';
import ControlledCarousel from './components/Carousel';


function App() {
  return (
    <div className="App">
      <NavbarCrowStream/>
      <ControlledCarousel/>
      <Footer/>

    </div>
  );
}

export default App;

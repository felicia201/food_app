import React from "react";
// import LandingPage from "./LandingPage";
import "./styles.css";
// import MapPage from "./Components/page/MapPage";
// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import MarkerClusterGroup from "react-leaflet-cluster";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";
// import "leaflet-routing-machine";
// import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
// import Navbar from "./Components/Navbar";
// import Footer from './Components/Footer';
import LandingPage from "./page/LandingPage";
import Navbar from "./Components/layout/navbar/Navbar"
import Footer from './Components/layout/footer/Footer';

function App() {
  return (
    <div className="App">

      
      <Navbar/>
      <LandingPage />
      {/* <MapPage/> */}
      <Footer/>
    </div>
  );
}

export default App;
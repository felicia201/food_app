import React from 'react';
// import Carousel from './Components/Carousel';  // Assure-toi d'avoir un composant Carousel
// import './Styles/landingpage.css';
import Navbar from '../Components/layout/navbar/Navbar';
import Footer from '../Components/layout/footer/Footer';
import Map from "../Components/Map";

const MapPage = () => {
    return (

        <div> 
<Navbar/>
        < Map />
        <Footer/>
        </div>
    );
};

export default MapPage;
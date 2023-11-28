import React from "react";
import "./styles.css";
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
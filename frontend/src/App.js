import React from "react";
import "./styles.css";
// import SignUp from "./page/SignUp";
import Navbar from "./Components/layout/navbar/Navbar"
import Footer from './Components/layout/footer/Footer';
import MapPage from "./page/MapPage";

function App() {
  return (
    <div className="App">

      
      <Navbar/>
      {/* <SignUp /> */}
      <MapPage/>
      <Footer/>
    </div>
  );
}

export default App;
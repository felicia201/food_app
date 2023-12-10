// LandingPage.js
import React from 'react';
import SearchBar from '../Components/SearchBar';
// import Carousel from './Components/Carousel';  // Assure-toi d'avoir un composant Carousel
import '../Styles/landingpage.css';
import Navbar from '../Components/layout/navbar/Navbar';
import Footer from '../Components/layout/footer/Footer';


const LandingPage = () => {
    return (
        <div>
            <Navbar/>
        <div className = "landing-page" >
         { /* Section 1 */ } 
        <div className = "section section-1" >
        <div className = "background-image" > 
        { /* Image de fond */ }
         <SearchBar />
        </div> 
        { /* <SearchBar /> */ }
         </div>

        { /* Section 2 */ }
         <div className = "section section-2" >
        <h2 > Pizza, Thaï, Burger, Pattes...tout à porter de miam! </h2> 
        <p> Découvrez MiamApp, pour manger bien, en un rien de temps!
        Réserve sur place ou commande à emporter, et gagne du temps sur tes pauses déjeuner </p> 
        </div>

        { /* Section 3 */ }
         <div className = "section section-3" >
             { /* <Carousel /> */ }

        </div>

        { /* Section 4 */ } <div className = "section section-4" >
        <div className = "background-image" >
             { /* Image de fond */ } 
             </div>
              <p > Découvrez nos offres du moment </p>
               </div>

        { /* Section 5 */ } 
        <div className = "section section-5" >
        <h2> Devenir Partenaires </h2>
         <div className = "cards-container" >
             { /* Card 1 */ }
              <div className = "card" >
        <h3 > Restaurant </h3>
         <p > Vous souhaitez plus de clients à vos tables ? </p>
          </div> { /* Card 2 */ }
           <div className = "card" >
        <h3 > Entreprises </h3> 
        <p > Envie de faciliter ses salariés ? </p>
         </div> 
         </div> 
         </div>

        { /* Section 6 */ } 
        <div className = "section section-6" >
        <h2 > Nos partenaires </h2> 
        <div className = "circle-container" >
             { /* Ajoute ici plusieurs ronds alignés contenant des images */ } 
             </div>
              </div> 
        </div>
        <Footer/>
        </div>
    );
}

export default LandingPage;
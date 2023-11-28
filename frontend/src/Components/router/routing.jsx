import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "../../page/LandingPage";
import Connexion from "../../page/LogIn"

// import les page ici !!!

const MiamApp = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path= "/" element={<LandingPage/>}/>                
            <Route path= "/connexion" element={<Connexion/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MiamApp;
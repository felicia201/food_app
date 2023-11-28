import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "../../page/LandingPage";

// import les page ici !!!

const MiamApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route> path= "/pipi" element={<LandingPage/>}</Route>
            </Routes>
        </BrowserRouter>
    )
}

export default MiamApp;
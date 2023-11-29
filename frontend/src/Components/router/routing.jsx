import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "../../page/LandingPage";
import Connexion from "../../page/LogIn"
import Inscription from "../../page/SignUp"
import Reset from "../../page/ResetPassword"
import Products from "../../page/Products"
import ProductDetails from "../../page/ProductsDetails"

// import les page ici !!!

const MiamApp = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path= "/" element={<LandingPage/>}/>                
            <Route path= "/login" element={<Connexion/>}/>
            <Route path= "/signup" element={<Inscription/>}/>
            <Route path= "/resetpassword" element={<Reset/>}/>
            <Route path= "/products" element={<Products/>}/>
            <Route path= "/details" element={<ProductDetails/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MiamApp;
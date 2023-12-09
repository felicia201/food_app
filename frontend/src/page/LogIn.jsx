import React, { useState } from 'react'
import { Input } from "./SignUp.jsx"
import { OthersMethods } from "./SignUp.jsx"
// import Image1 from "../../public/asset"
import "../Styles/App.scss"
import Navbar from '../Components/layout/navbar/Navbar';
import Footer from '../Components/layout/footer/Footer';

function Connexion({ form, setForm, sendForm }){
    return (
         <div><Navbar/>
        <div className="container-login">
            <div className="form-login">
                <form onSubmit={sendForm}>
                <div className="title">CONNEXION</div>
                <Input type="text" id="email" label="Adresse mail" form={form} setForm={setForm}/>
                <Input type="password" id="password" label="Mot de passe" form={form} setForm={setForm}/>
                <div className="links">
                    <a href="/resetpassword" id="forgotten-password">Mot de passe oublié</a>
                    <a href="/signup" id="signup">Inscrivez-vous</a>
                </div>
                <input type="submit" value="Se connecter" onClick={() => window.location.href="/products"}/>
            </form>
            <OthersMethods />
            </div>
        </div>
        <Footer/>
        </div>
    )
}

function BackgroundImage(){
    return (
        <div className="background">
            <img src="/asset/Image1.jpg" alt="BackgroundImages" id="background"/>
        </div>
    )
}

export default function LogIn() {
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    
    function sendForm(e,form){
        e.preventDefault()
        console.log(form)
    }
      
  return (
    <>
        <div className="login">
            <BackgroundImage />
            <Connexion form={form} setForm={setForm} sendForm={(e) => sendForm(e,form)} />
        </div>
    </>
  )
}

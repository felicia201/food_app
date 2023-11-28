import React, { useState } from 'react'
import { Input } from "./SignUp.jsx"
import { OthersMethods } from "./SignUp.jsx"
import Image1 from "/asset/Image1.jpg"
import "../Styles/App.scss"

function Connexion({ form, setForm, sendForm }){
    return (
        <div className="container-login">
            <div className="form-login">
                <form onSubmit={sendForm}>
                <div className="title">CONNEXION</div>
                <Input type="text" id="email" label="Adresse mail" form={form} setForm={setForm}/>
                <Input type="password" id="password" label="Mot de passe" form={form} setForm={setForm}/>
                <div className="links">
                    <a href="/resetpassword/" id="forgotten-password">Mot de passe oublié</a>
                    <a href="/signup/" id="signup">Inscrivez-vous</a>
                </div>
                <input type="submit" value="Se connecter" />
            </form>
            <OthersMethods />
            </div>
        </div>
    )
}

function BackgroundImage(){
    return (
        <div className="background">
            <img src={Image1.src} alt="BackgroundImages" id="background"/>
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
        <header></header>
        <div className="login">
            <BackgroundImage />
            <Connexion form={form} setForm={setForm} sendForm={(e) => sendForm(e,form)} />
        </div>
        <footer></footer>
    </>
  )
}

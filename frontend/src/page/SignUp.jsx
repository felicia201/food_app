import React, { useState } from 'react'
// import Image1 from "../Images/Image1.jpg"
import "../Styles/App.scss"

export function Input({ type, id, label, form, setForm}){

    function isInput(value,input){
        if(input === "name"){
            return {...form, name: value}
        }
        if(input === "password"){
            return {...form, password: value}
        }
        if(input === "confirm"){
            return {...form, confirm: value}
        }
        if(input === "email"){
            return {...form, email: value}
        }
        if(input === "phone"){
            return {...form, phone: value}
        }
    }
    return (
        <>
        <label htmlFor={ id }>{ label }</label>
        <input type={type} name={id} id={ id } onChange={(e) => setForm(isInput(e.target.value,id))}/>
        </>
    )
}

function Button({ id, value, svg }){
    return(
    <button id={id}>
        {value}
        <img src={svg} alt="" />
    </button>
    )
}

export function OthersMethods(){
    return(
        <div>
            <Button id="google" value="Google" svg={""}/>
            <Button id="facebook" value="Facebook" svg={""}/>
            <Button id="instagram" value="Instagram" svg={""}/>
        </div>
    )
}

function Inscription({ form, setForm, sendForm}){
    return (
        <div className="container-signup">
            <div className="form-signup">
                <form onSubmit={sendForm}>
                    <div className="title">INSCRIPTION</div>
                    <Input type="text" id="name" label="Nom" form={form} setForm={setForm}/>
                    <Input type="text" id="email" label="Adresse mail" form={form} setForm={setForm}/>
                    <Input type="password" id="password" label="Mot de passe" form={form} setForm={setForm}/>
                    <Input type="password" id="confirm" label="Confirmer le mot de passe" form={form} setForm={setForm}/>
                    <Input type="text" id="phone" label="Numéro de téléphone" form={form} setForm={setForm}/>
                    <div className="links">
                        <a href="/login" id="login">Déjà inscrit? Connectez-vous</a>
                    </div>
                    <input type="submit" value="S'inscrire" />
                </form>
            <OthersMethods />
            </div>
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
    name: "",
    email: "",
    password: "",
    confirm: "",
    phone: ""
  })

  function sendForm(e,form){
    e.preventDefault()
    console.log(form)
  }

  return (
    <>
        <div className="signup">
            <BackgroundImage />
            <Inscription form={form} setForm={setForm} sendForm={(e) => sendForm(e,form)}/>
        </div>
    </>
  )
}

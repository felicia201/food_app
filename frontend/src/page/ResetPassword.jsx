import React,{ useState } from 'react'
import { Input } from "./SignUp"
// import Image1 from "/asset/Image1.jpg"
import "../Styles/App.scss"
import Navbar from '../Components/layout/navbar/Navbar';
import Footer from '../Components/layout/footer/Footer';

function Change({form, setForm, sendForm, setSent, sent}){
    return (
        <div className="container-reset">
            <div className="form-reset">
                <form onSubmit={sendForm}>
                    <div className="title">MOT DE PASSE OUBLIE</div>
                    <Input type="text" id="email" label="Entrez une adresse mail de récupération" form={form} setForm={setForm}/>
                    <input type="submit" value="Envoyer" onClick={() => setSent(!sent)}/>
                </form>
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

export default function ResetPassword() {

    const [form, setForm] = useState({
        email: ""
    })
    const [sent, setSent] = useState(false)
    
    function sendForm(e,form){
        e.preventDefault()
        console.log(form)
    }

  return (
    <>
    <Navbar/>
        <div className="resetpassword">
            {!sent 
            ?
            <>
                <BackgroundImage />
                <Change form={form} setForm={setForm} sendForm={(e) => sendForm(e,form)} setSent={setSent} sent={sent}/>
            </>
            : 
            <h2>
                Un lien a été envoyé à l'adresse <span>{form.email}</span> pour vous permettre de changer de mot de passe 
            </h2>
            }
        </div>
        <Footer/>
    </>
  )
}

import React from 'react'
import Image from "/asset/Hamburger.jpg"
import Image2 from "/asset/Hamburger 2.jpg"
import Localisation from "/asset/localisateur.png"
import "../Styles/App.scss"

function Banner(){
    return (
        <div className="banner">
            <img src={Image.src} alt="Banner" id="banner"/>
        </div>
    )
}


function Note({ note }){
    return(
           <div className="note">
            <span>{note}</span>
           </div> 
    )
}

function Notes(){
    return(
        <>
           <Note note={1} /> 
           <Note note={2} /> 
           <Note note={3} /> 
           <Note note={4} /> 
           <Note note={5} /> 
        </>
    )
}

function Details(){
    return (
        <div className="details">
            <div className="left">
                <img src={Image.src} alt="Banner" id="details"/>
                
                <div className="notes">
                    <Notes />
                </div>
            </div>
            <div className="right">
                <div className="title">
                    <p>LE COUCHER DE SOLEIL</p>
                </div>
                <div className="opened">
                    <div className="separator-info"></div><span>Ouvert</span>
                </div>
                <div className="infos">
                    <span>Thaï</span>
                    <div className="separator-info"></div>
                    <span>Paris - 15ème arr</span>
                    <div className="separator-info"></div>
                    <span>07 H 30 - 19 H 30</span>
                </div>
                
                <div className="menu">
                    <span>Aile de poulet</span>
                    <div className="separator-menu"></div>
                    <span>Cuisse de poulet</span>
                    <div className="separator-menu"></div>
                    <span>Pilon de poulet</span>
                                </div>
                    <div className="price"><span>20€ - 350€</span>

                    </div>
                    <div className="register">

                    </div>
                <div className="description">
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe voluptate natus vel, exercitationem eveniet blanditiis rem porro, placeat, beatae in necessitatibus repellat itaque. Repellat possimus quisquam quas recusandae sint nemo facere nam voluptatem eveniet, reiciendis, aliquam et ab eum ratione perferendis numquam, quibusdam rem enim. Repudiandae dolor fugiat est.
                    </p>
                </div>
            </div>
        </div>
    )
}

function Modalities(){
    return (
        <div className="modalities">
            <div>
                <div className="top">
                    <span><img src={Localisation.src} alt="alt" width="25px" height="25px"/> 9 Avenue du Vieux Duc</span>
                    <button>Enregistrer</button>
                </div>
                <div className="bottom">
                    <button className="action">Prendre une réservation</button>
                    <button className="action">Effectuer une commande</button>
                </div>
            </div>
        </div>
    )
}

function Comment(){
    return (
        <div className="comment">
            <div className="top">
                <div className="picture left"></div>
                <div className="right">
                    <div className="left">
                        <div className="name">Gauthier Théophile</div>
                        <div className="day">22/10/2023</div>
                    </div>
                    <div className="note-comment">4/5</div>
                </div>
            </div>
            <p className="comment-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem delectus vero, nihil fuga, tempora nemo vitae, autem totam optio praesentium deleniti cupiditate aspernatur sed error id repellat ullam voluptatem quasi.</p>
        </div>
    )
}

function Comments(){
    return (
        <div className="comments">
            <Comment />
            <Comment />
            <Comment />
        </div>
    )
}

function Images(){
    return (
        <div className="places">
            <img src={Image2.src} alt="Place" className="place"/>
            <img src={Image2.src} alt="Place" className="place"/>
            <img src={Image2.src} alt="Place" className="place"/>
        </div>
    )
}

function Reinsurance(){
    return (
        <div className="reinsurance"></div>
        // <img src="./banner" alt="Banner" width="100vw" height="20vh"/>
    )
}

export default function DetailsOfProducts() {
  return (
    <>
        <header></header>
        <div className="detailsofproducts">
            <Banner />
            <Details />
            <Modalities />
            <Comments />
            <Images />
            <Reinsurance />
        </div>
        <footer></footer>
    </>
  )
}

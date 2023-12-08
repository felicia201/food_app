import React from 'react'
import "../Styles/App.scss"

function Dish({ image, title, price }){
    return (
        <div>
            <img src={image} alt="" width="200px" height="200px"/>
            <span>{title}</span>
            <span>{price}</span>
            <button>Modifier</button>
        </div>
    )
}

function Menus(){
    return (
        <div>
            <Dish image="/asset/Hamburger 2.jpg" title="Hamburger" price="17€"/>
            <Dish image="/asset/Hamburger 2.jpg" title="Hamburger" price="17€"/>
            <Dish image="/asset/Hamburger 2.jpg" title="Hamburger" price="17€"/>
            <Dish image="/asset/Hamburger 2.jpg" title="Hamburger" price="17€"/>
            <Dish image="/asset/Hamburger 2.jpg" title="Hamburger" price="17€"/>
            <Dish image="/asset/Hamburger 2.jpg" title="Hamburger" price="17€"/>
            <Dish image="/asset/Hamburger 2.jpg" title="Hamburger" price="17€"/>
            <Dish image="/asset/Hamburger 2.jpg" title="Hamburger" price="17€"/>
            <Dish image="/asset/Hamburger 2.jpg" title="Hamburger" price="17€"/>
        </div>
    )
}

export default function RestoCard() {
    const restaurant = "LE COUCHER DE SOLEIL"
  return (
        <div>
            <p>Bienvenue sur votre espace de gestion {restaurant}</p>
            <button>Ajouter un plat</button>
            <Menus />
        </div>
  )
}

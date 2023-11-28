import React from 'react'
import "../Styles/App.scss"

function Dish(){
    return (
        <div>
            <img src="" alt="" />
            <p>Titre</p>
            <button>Afficher</button>
        </div>
    )
}

function Menus(){
    return (
        <div>
            <Dish />
            <Dish />
            <Dish />
        </div>
    )
}

export default function RestoCard() {
  return (
    <div>
        <header></header>
        <div>
            <button>Ajouter un plat</button>
            <Menus />
        </div>
        <footer></footer>
    </div>
  )
}

import React, { useState, useEffect } from 'react'
// import Image from "/asset/Hamburger.jpg"
import "../Styles/App.scss"


function SpecialOffer(){
    return (
        <img src="./banner" alt="Banner" width="100vw" height="20vh"/>
    )
}

function Filter(){

    const [clicked, setClicked] = useState(false)

    function getUp(){
        let a = document.querySelector(".options").clientHeight
        // document.querySelector(".options").style.transform = `translateY(-${a}px)`
        // document.querySelector(".options").style.visibility = `hidden`
        console.dir(document.querySelector(".options"))
        console.log(document.querySelector(".options").animationName)
    }

    return (
        <>
            <div className="title-options"><h4>Evènements <button onClick={() => getUp()}>O</button></h4></div>
            <div className="options">
                <button>lorem</button>
                <button>lorem</button>
                <button>lorem</button>
                <button>lorem</button>
                <button>lorem</button>
            </div>
        </>
    )
}

function Filters(){
    return (
        <div className="filter">
            <Filter />
            <Filter />
            <Filter />
        </div>
        // <img src="./banner" alt="Banner" width="100vw" height="20vh"/>
    )
}

function Product(){
    return (
    <a href="/details">
        <div className="product">
            <img src="/asset/Hamburger.jpg" alt="Produit" width="250px" height="250px"/>
            <div>
                <div className="content">
                    <div className="left">
                        <span className="titre">Le coucher de soleil</span>
                        <span>9 Avenue du vieux duc</span>
                        <span className="min">Min. 10€</span>
                    </div>
                    <div className="right">
                        <span className="opened"><div className="separator"></div> Ouvert</span>
                        <button>Enregistrer</button>
                    </div>
                </div>
                <div className="bott">
                    <div className="menu-product">
                        <span><div className="bullet"></div> Plat 1</span>
                        <span><div className="bullet"></div> Plat 2</span>
                        <span><div className="bullet"></div> Plat 3</span>
                        <span><div className="bullet"></div> Plat 4</span>
                    </div>
                    <button>Découvrir</button>
                </div>
            </div>
        </div>
    </a>
//     <a href="/product/">
//     <div className="product">
//         <img src={Image.src} alt="Produit" width="250px" height="250px"/>
//         <span className="titre">Le coucher de soleil</span>
//         <span>Min. 10€</span>
//     </div>
//     </a>
    )
}

function AllProducts(){
    return (
        <div className="AllProducts">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    )
}

function Nav(){
    return (
        <div></div>
        // <img src="./banner" alt="Banner" width="100vw" height="20vh"/>
    )
}

export default function Products() {
  return (
    <div>
        <div className="products">
            <Filters />
            <AllProducts />
            {/* <SpecialOffer />
            <Filters />
            <AllProducts />
            <ProductsNav /> */}
        </div>
    </div>
  )
}

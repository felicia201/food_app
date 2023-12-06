import React, { useState, useEffect } from 'react'
// import Image from "/asset/Hamburger.jpg"
import "../Styles/App.scss"

function InputRadio({ name, value }){
    return(
        <div className="choices">
            <input type="radio" name={name} value={value} id={value} className="choice"/>
            <label htmlFor={value}>{value}</label>
        </div>
        )
}

function SpecialOffer(){
    return (
        <img src="./banner" alt="Banner" width="100vw" height="20vh"/>
    )
}

function Filter({ filter, name, values }){

    const [opened, setOpened] = useState(true)

    // function getUp(){
    //     let a = document.querySelector(".options").clientHeight
    //     // document.querySelector(".options").style.transform = `translateY(-${a}px)`
    //     // document.querySelector(".options").style.visibility = `hidden`
    //     console.dir(document.querySelector(".options"))
    //     console.log(document.querySelector(".options").animationName)
    // }

    function rotation(e){
        setOpened(!opened)
        e.target.classList.toggle("rotate")
        // document.querySelector(".options").classList.toggle("hide")
    }

    return (
        <>
            <div className="title-options"><h4>{filter}</h4><img src="/asset/arrow.svg" alt="" width="10px" height="10px" onClick={(e) => rotation(e)}/></div>
            {
            opened &&
            <div className="options">
                {values.map((element,index) => 
                    <InputRadio name={name} value={element} key={index} />
                )}
            </div>
            }
        </>
    )
}

function Filters(){
    const prix = ["Inférieur à 10€", "Inférieur à 100€", "Inférieur à 250€", "Inférieur à 500€"]
    const regime = ["Halal", "Végétarien", "Normal"]
    const cuisine = ["Côtes de porc", "Emincé de poulet", "Soupe aux choux", "Poulet pané"]
    return (
        <div className="filter">
            <Filter name="prix" filter="Prix" values={prix}/>
            <Filter name="regime" filter="Régime" values={regime}/>
            <Filter name="cuisine" filter="Cuisine" values={cuisine}/>
        </div>
        // <img src="./banner" alt="Banner" width="100vw" height="20vh"/>
    )
}

function Product({ title, minimum, city, image }){
    return (
    // <a href="/details">
    //     <div className="product">
    //         <img src="/asset/Hamburger.jpg" alt="Produit" width="250px" height="250px"/>
    //         <div>
    //             <div className="content">
    //                 <div className="left">
    //                     <span className="titre">Le coucher de soleil</span>
    //                     <span>9 Avenue du vieux duc</span>
    //                     <span className="min">Min. 10€</span>
    //                 </div>
    //                 <div className="right">
    //                     <span className="opened"><div className="separator"></div> Ouvert</span>
    //                     <button>Enregistrer</button>
    //                 </div>
    //             </div>
    //             <div className="bott">
    //                 <div className="menu-product">
    //                     <span><div className="bullet"></div> Plat 1</span>
    //                     <span><div className="bullet"></div> Plat 2</span>
    //                     <span><div className="bullet"></div> Plat 3</span>
    //                     <span><div className="bullet"></div> Plat 4</span>
    //                 </div>
    //                 <button>Découvrir</button>
    //             </div>
    //         </div>
    //     </div>
    // </a>
    <a href="/details">
        <div className="product">
            <div className="img" style={{backgroundImage: `url("${image}")`, backgroundSize: "cover", backgroundPosition:"center", backgroundRepeat: "no-repeat", width: "250px", height: "150px"}} ></div>
            <span className="titre">{title}</span>
            <div className="comp">
                <span>Min. {minimum}</span>
                <div className="bullet"></div>
                <span>{city}</span>
            </div>
        </div>
    </a>
    )
}

function AllProducts(){
    return (
        // EN attendant de réaliser le fetch
        <div className="AllProducts">
            <Product title="Le coucher de soleil" minimum="10€" city="Montreuil" image="/asset/Hamburger.jpg"/>
            <Product title="Le coucher de soleil" minimum="10€" city="Montreuil" image="/asset/Hamburger.jpg"/>
            <Product title="Le coucher de soleil" minimum="10€" city="Montreuil" image="/asset/Hamburger.jpg"/>
            <Product title="Le coucher de soleil" minimum="10€" city="Montreuil" image="/asset/Hamburger.jpg"/>
            <Product title="Le coucher de soleil" minimum="10€" city="Montreuil" image="/asset/Hamburger.jpg"/>
            <Product title="Le coucher de soleil" minimum="10€" city="Montreuil" image="/asset/Hamburger.jpg"/>
            <Product title="Le coucher de soleil" minimum="10€" city="Montreuil" image="/asset/Hamburger.jpg"/>
            <Product title="Le coucher de soleil" minimum="10€" city="Montreuil" image="/asset/Hamburger.jpg"/>
            <Product title="Le coucher de soleil" minimum="10€" city="Montreuil" image="/asset/Hamburger.jpg"/>
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

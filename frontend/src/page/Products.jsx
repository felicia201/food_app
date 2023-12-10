import React, { useState, useEffect } from 'react'
// import Image from "/asset/Hamburger.jpg"
import "../Styles/App.scss"
import Navbar from '../Components/layout/navbar/Navbar';
import Footer from '../Components/layout/footer/Footer';

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
    // const prix = ["Inférieur à 10€", "Inférieur à 100€", "Inférieur à 250€", "Inférieur à 500€"]
    const opening = ["09 H 00", "10 H 00", "11 H 00"]
    const closing = ["21 H 00", "22 H 00", "23 H 00"]
    const regime = ["Halal", "Végétarien", "Casher","Sans gluten", "Végétalien"]
    const cuisine = ["Italien", "Fast-food", "Japonais", "Boulangerie", "Thaïlandais"]
    // const cuisine = ["Côtes de porc", "Emincé de poulet", "Soupe aux choux", "Poulet pané"]
    return (
        <div className="filter">
            <Filter name="regime" filter="Régime" values={regime}/>
            <Filter name="cuisine" filter="Cuisine" values={cuisine}/>
            <Filter name="opening" filter="Ouverture" values={opening}/>
            <Filter name="closing" filter="Fermeture" values={closing}/>
        </div>
        // <img src="./banner" alt="Banner" width="100vw" height="20vh"/>
    )
}

function Product({ title, image }){
    
    
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
            {/* <div className="comp">
                <span>Min. {minimum}</span>
                <div className="bullet"></div>
                <span>{city}</span>
            </div> */}
        </div>
    </a>
    )
}

function AllProducts({ products }){
    console.log(products)
    return (
        // EN attendant de réaliser le fetch
        <div className="AllProducts">
            {products.map((element) => <Product title={element.name} image="/asset/Hamburger.jpg" key={element.name}/>)}
            <Product title="Le coucher de soleil" image="/asset/Hamburger.jpg"/>
            {/* // 
            // <Product title="Le coucher de soleil" minimum="10€" city="Montreuil" image="/asset/Hamburger.jpg"/>
            // <Product title="Le coucher de soleil" minimum="10€" city="Montreuil" image="/asset/Hamburger.jpg"/>
            // <Product title="Le coucher de soleil" minimum="10€" city="Montreuil" image="/asset/Hamburger.jpg"/>
            // <Product title="Le coucher de soleil" minimum="10€" city="Montreuil" image="/asset/Hamburger.jpg"/>
            // <Product title="Le coucher de soleil" minimum="10€" city="Montreuil" image="/asset/Hamburger.jpg"/>
            // <Product title="Le coucher de soleil" minimum="10€" city="Montreuil" image="/asset/Hamburger.jpg"/>
            // <Product title="Le coucher de soleil" minimum="10€" city="Montreuil" image="/asset/Hamburger.jpg"/>
            // <Product title="Le coucher de soleil" minimum="10€" city="Montreuil" image="/asset/Hamburger.jpg"/> */}
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
  
    const [data, setData] = useState([])
    
    useEffect(() => {
      fetch("http://localhost:3000/api/restaurants") 
      .then((response) => response.json())
      .then((res) => {
        setData(res)
        console.log(res)
      })
    }, [])

    return (
    <div>
        <Navbar/>
        <div className="products">
            <Filters />
            <AllProducts products={data}/>
            {/* <SpecialOffer />
            <Filters />
            <AllProducts />
            <ProductsNav /> */}
        </div>
        <Footer/>
    </div>
  )
}

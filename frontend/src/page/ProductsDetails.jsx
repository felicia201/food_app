import React, { useState, useEffect } from 'react'
// import Image from "/asset/Hamburger.jpg"
// import Image2 from "/asset/Hamburger 2.jpg"
// import Localisation from "/asset/localisateur.png"
import "../Styles/App.scss"

// function Banner(){
//     return (
//         <div className="banner">
//             <img src="/asset/Hamburger.jpg" alt="Banner" id="banner"/>
//         </div>
//     )
// }


// function Note({ note }){
//     return(
//            <div className="note">
//             <span>{note}</span>
//            </div> 
//     )
// }

// function Notes(){
//     return(
//         <>
//            <Note note={1} /> 
//            <Note note={2} /> 
//            <Note note={3} /> 
//            <Note note={4} /> 
//            <Note note={5} /> 
//         </>
//     )
// }

function Details({ image, title, type, city, opening, closing, menu, min, max, description }){
    return (
        <div className="details">
                {/* <div className="notes">
                    <Notes />
                </div> */}
            <div className="top">
                <div className="left">
                    <img src={image} alt="Banner" id="details"/>
                    
                </div>
                <div className="right">
                    
                    <div className="title">
                        <p>{title}</p>
                    </div>
                    {/* <div className="opened">
                        <div className="separator-info"></div><span>Ouvert</span>
                    </div> */}
                    <div className="infos">
                        <span>{type}</span>
                        <div className="separator-info"></div>
                        <span>{city}</span>
                        <div className="separator-info"></div>
                        <span>{opening} - {closing}</span>
                    </div>
                    
                    <div className="menu">
                        <span>Aile de poulet</span>
                        <div className="separator-menu"></div>
                        <span>Cuisse de poulet</span>
                        <div className="separator-menu"></div>
                        <span>Pilon de poulet</span>
                                    </div>
                        <div className="price"><span>{min} - {max}</span>

                        </div>
                    </div>
                    {/* <div className="register">

                    </div> */}
            </div>
                <div className="description">
                    <p>
                        {description}
                    </p>
                </div>
        </div>
    )
}

function Modalities({ place }){
    return (
        <div className="modalities" style={{backgroundImage: `url("/asset/Image2.jpg")`, backgroundSize: "cover", backgroundPosition:"center", backgroundRepeat: "no-repeat"}}>
            <div>
                <div className="top">
                    <span><img src="/asset/localisateur.png" alt="alt" width="25px" height="25px"/> {place}</span>
                    {/* <button>Enregistrer</button> */}
                </div>
                <div className="bottom">
                    <button>Faire une réservation</button>
                    <a href="#menu"><button>Effectuer une commande</button></a>
                </div>
            </div>
        </div>
    )
}

function Basket({ numberOfArticles, articles, onMenuItemClicked, onMenuItemClickedToRemove, onRemoveItemFromList, onAddItemToList }){
    const [clicked, setClicked] = useState(false)
    const inTheBasket = articles.filter((element) => element.times !== 0)
    // console.log(menu)
    // console.log(inTheBasket)
    return (
        <div className="basket">
            <div>
                <div className="top">
                    <img src="/asset/cart.svg" alt="alt" width="55px" height="55px"/>
                </div>
                <div className="bottom">
                    <button onClick={() => setClicked(!clicked)}>{clicked ? "Masquer" : "Afficher"} le panier({numberOfArticles})</button>
                </div>
            </div>
            {
            (inTheBasket.length !== 0 && clicked) 
            &&
            <div className="items">
            {inTheBasket.map((element) =>
            
            <div className="item" key={element.title}>
                    <span>{element.title}</span>
                    <span>{element.price}</span>
                    <span>{element.times}</span>
                    <div className="actions">
                        <img src="/asset/plusitems.svg" alt="" width="20px" height="20px" onClick={() => {onMenuItemClicked();onAddItemToList(articles,element.title)}}/>
                        <img src="/asset/minus.svg" alt="" width="20px" height="20px" onClick={() => {onMenuItemClickedToRemove();onRemoveItemFromList(articles,element.title)}}/>
                    </div>
                    </div>)
                
}            
                    <div className="total">Total</div>
                    <button>Valider la commande</button>
                </div>
           
            }
        </div>
    )
}

function MenuItem({ image, title, ingredients, price, onMenuItemClicked }){

    return(
    <div className="menuitem">
        <div className="top" style={{backgroundImage: `url("${image}")`, backgroundSize: "cover", backgroundPosition:"center", backgroundRepeat: "no-repeat", width: "200px", height: "125px"}}>
            
        </div>
        <div className="bottom">
            <span className="title">{title}</span>
            <span className="ingredients"><i>{ingredients}</i></span>
            <span className="price">{price}</span>
            <div onClick={onMenuItemClicked}><img src="/asset/plus.svg" alt="" width="30px" height ="30px"/></div>
        </div>
    </div>
    )
}

function Menu({ onMenuItemClicked, menuItems, onAddItemToList }){
    
    return(
        <>
        <p className="phrase-menu"><i>Découvrez le menu...</i></p>
        <div className="menus" id="menu">
            {menuItems.map((element) =>
            <MenuItem key={element.title} image={element.image} title={element.title} ingredients={element.ingredients} price={element.price} onMenuItemClicked={() => {onMenuItemClicked();onAddItemToList(menuItems, element.title)}}/>)}
        </div>
        </>
    )
}

function Comment({ name, date, note, content }){
    return (
        <div className="comment">
            <div className="top">
                <div className="picture left"></div>
                <div className="right">
                    <div className="left">
                        <div className="name">{name}</div>
                        <div className="day">{date}</div>
                    </div>
                    <div className="note-comment">{note}/5</div>
                </div>
            </div>
            <p className="comment-text">{content}</p>
        </div>
    )
}

function Comments(){
    return (
        <div className="comments">
            <Comment name="Gauthier Théophile" date="22/11/2023" note="4" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem delectus vero, nihil fuga, tempora nemo vitae, autem totam optio praesentium deleniti cupiditate aspernatur sed error id repellat ullam voluptatem quasi."/>
            <Comment name="Gauthier Théophile" date="22/11/2023" note="4" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem delectus vero, nihil fuga, tempora nemo vitae, autem totam optio praesentium deleniti cupiditate aspernatur sed error id repellat ullam voluptatem quasi."/>
            <Comment name="Gauthier Théophile" date="22/11/2023" note="4" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem delectus vero, nihil fuga, tempora nemo vitae, autem totam optio praesentium deleniti cupiditate aspernatur sed error id repellat ullam voluptatem quasi."/>
        </div>
    )
}

// function Images(){
//     return (
//         <div className="places">
//             <img src="/asset/Hamburger 2.jpg" alt="Place" className="place"/>
//             <img src="/asset/Hamburger 2.jpg" alt="Place" className="place"/>
//             <img src="/asset/Hamburger 2.jpg" alt="Place" className="place"/>
//         </div>
//     )
// }

function Reinsurance(){
    return (
        <div className="reinsurance"></div>
        // <img src="./banner" alt="Banner" width="100vw" height="20vh"/>
    )
}

export default function DetailsOfProducts() {
    // const [menuItemClicked, setMenuItemClicked] = useState(0)

    const [menuList, setMenuList] = useState(
        [   0,
            [
            {image: "/asset/Hamburger 2.jpg", title: "Hamburger", ingredients: "Steak, fromage, tomate, salade, tranches de pain, cornichons", price: "17€"},
            {image: "/asset/Hamburger 2.jpg", title: "Hamburger 2", ingredients: "Steak, fromage, tomate, salade, tranches de pain, cornichons", price: "17€"},
            {image: "/asset/Hamburger 2.jpg", title: "Hamburger 3", ingredients: "Steak, fromage, tomate, salade, tranches de pain, cornichons", price: "17€"},
            {image: "/asset/Hamburger 2.jpg", title: "Hamburger 4", ingredients: "Steak, fromage, tomate, salade, tranches de pain, cornichons", price: "17€"}
            ]
        ])
    
    useEffect(() => {
      setMenuList(m => m.map((element,index) => (index === 0) ? element : element.map((element2) => {return {...element2, times: 0}} )))
    }, [])
    
    // console.log(menuList[1])
    // const menu = menuList.map((element) => {return {...element, times: 0}} )
    
    function handleMenuItemClick(){
        setMenuList(m => m.map((element,index) => (index === 0) ? element + 1 : element))
    }

    function handleMenuItemClickToRemove(){
        setMenuList(m => m.map((element,index) => (index === 0) ? element - 1 : element))
    }

    function handleAddItemToList(menu, title){
        setMenuList(m => m.map((element,index) => (index === 0) ? element : menu.map((element) => {
                if(element.title === title){
                    console.log(element)
                    return {...element, times: (element.times + 1)}
                }
                return element
                })
            )
        )       
    }

    function handleRemoveItemFromList(menu, title){
        setMenuList(m => m.map((element,index) => (index === 0) ? element : menu.map((element) => {
                if(element.title === title){
                    console.log(element)
                    return {...element, times: (element.times - 1)}
                }
                return element
                })
            )
        )       
    }

  return (
    <>
        <div className="detailsofproducts">
            <Details image="/asset/Hamburger.jpg" title="LE COUCHER DE SOLEIL" type="Thaï" city="Paris - 15ème arr." opening="07 H 30" closing="19 H 30" menu={["Aile de poulet", "Cuisse de poulet", "Pilon de poulet"]} min="20€" max="350€" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe voluptate natus vel, exercitationem eveniet blanditiis rem porro, placeat, beatae in necessitatibus repellat itaque. Repellat possimus quisquam quas recusandae sint nemo facere nam voluptatem eveniet, reiciendis, aliquam et ab eum ratione perferendis numquam, quibusdam rem enim. Repudiandae dolor fugiat est."/>
            <Modalities place="9 Avenue du Vieux Duc"/>
            <Menu onMenuItemClicked={handleMenuItemClick} menuItems={menuList[1]} onAddItemToList={handleAddItemToList}/>
            <Basket numberOfArticles={menuList[0]} articles={menuList[1]} onMenuItemClicked={handleMenuItemClick} onMenuItemClickedToRemove={handleMenuItemClickToRemove} onAddItemToList={handleAddItemToList} onRemoveItemFromList={handleRemoveItemFromList}/>
            <Comments />
            {/* <Images /> */}
            <Reinsurance />
        </div>
    </>
  )
}

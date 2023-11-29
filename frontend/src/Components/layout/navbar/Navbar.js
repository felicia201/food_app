import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../../../Styles/header.css';


function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

<<<<<<< HEAD
    return ( <
        header >
        <
        h3 > MiamApp < /h3> <
        nav ref = { navRef } >
        <
        Link to = "/" >
        <
        a > Accueil < /a> < /
        Link > <
        Link to = "/produits" >
        <
        a > Produits < /a> < /
        Link > <
        a href = "/#" > Partenariat < /a> <
        a href = "/#" > Connexion < /a> <
        button className = "nav-btn nav-close-btn"
        onClick = { showNavbar } >
        <
        FaTimes / >
        <
        /button> < /
        nav > <
        button className = "nav-btn"
        onClick = { showNavbar } >
        <
        FaBars / >
        <
        /button> < /
        header >
    );
=======
	return (
		<header>
			<h3>MiamApp</h3>
			<nav ref={navRef}>
				<Link to="/">
  					<a>Accueil</a>
				</Link>
				<Link to="/products">
  					<a>Produits</a>
				</Link>
				<a href="/#">Partenariat</a>
				<Link to="/login">
  					<a>Connexion</a>
				</Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
>>>>>>> f687f8b41107ebadebe2de6c5ea818d4a29171cc
}

export default Navbar;
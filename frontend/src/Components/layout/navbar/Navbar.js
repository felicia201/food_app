import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import '../../../Styles/header.css';


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>MiamApp</h3>
			<nav ref={navRef}>
				<a href="/#">Accueil</a>
				<a href="/#">Produits</a>
				<a href="/#">Partenariat</a>
				<a href="/#">Connexion</a>
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
}

export default Navbar;
import React from 'react';
import '../Styles/footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="column">
        <h4>Découvrez MiamApp</h4>
        <ul>
          <li><a href="#">Notre entreprise</a></li>
          <li><a href="#">Nos partenaires</a></li>
          <li><a href="#">Ajouter mon restaurant</a></li>
          <li><a href="#">Ajouter mon établissement</a></li>
          <li><a href="#">Nous contacter</a></li>
        </ul>
      </div>

      <div className="column">
        <h4>Mentions légales</h4>
        <ul>
          <li><a href="#">Mentions légales</a></li>
          <li><a href="#">Confidentialité</a></li>
          <li><a href="#">Cookies</a></li>
          <li><a href="#">Conditions</a></li>
        </ul>
      </div>

      <div className="column">
        <h4>Aide</h4>
        <ul>
          <li><a href="#">Nous contacter</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Comment utiliser MiamApp ?</a></li>
        </ul>
      </div>

      <div className="column">
        {/* <h4>Réseaux sociaux</h4> */}
        <ul className="social-icons">
          <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
          <p>&copy; 2023 MiamApp. Tous droits réservés.</p>
        </ul>
      </div>

      {/* Ligne de séparation */}
      {/* <hr /> */}

      {/* Copyright centré au milieu du footer */}
      {/* <div className="copyright">
        <p>&copy; 2023 MiamApp. Tous droits réservés.</p>
      </div> */}
    </footer>
  );
};

export default Footer;


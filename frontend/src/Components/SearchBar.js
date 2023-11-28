import React, { useState } from 'react';
import '../Styles/searchbar.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [deliveryOption, setDeliveryOption] = useState('surPlace');

  const handleSearch = () => {
    // Vous pouvez implémenter ici la logique pour envoyer la recherche au backend
    console.log('Recherche:', searchTerm);
    console.log('Option de livraison:', deliveryOption);
    // Rediriger vers la page des produits avec les filtres sélectionnés
    // history.push(`/products?filter=${selectedFilters.join(',')}`);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Rechercher un restaurant, une spécialité un lieu..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        value={deliveryOption}
        onChange={(e) => setDeliveryOption(e.target.value)}
      >
        <option value="surPlace">Sur place</option>
        <option value="aEmporter">À emporter</option>
      </select>

      <button onClick={handleSearch}>Rechercher</button>

      <div className="filter-list">
        {/* Ajoutez vos icônes de filtre ici */}
        {/* Exemple avec une icône pour un filtre de catégorie */}
        {/* <span className="filter-icon" onClick={() => console.log('Filtrer par catégorie')}>
          🍔
        </span> */}
        {/* Ajoutez d'autres icônes de filtre au besoin */}
      </div>
    </div>
  );
};

export default SearchBar;

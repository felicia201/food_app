// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import "./styles.css";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

const customIcon = new L.Icon({
  iconUrl: require("./icons/icons.png"),
  iconSize: [38, 38],
});

const createClusterCustomIcon = function (cluster) {
  return new L.DivIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: L.point(33, 33, true),
  });
};

export default function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [mapCenter, setMapCenter] = useState([48.8566, 2.3522]);
  const mapRef = useRef(null);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = [position.coords.latitude, position.coords.longitude];
          setMapCenter(userLocation, () => {
            if (mapRef.current) {
              mapRef.current.leafletElement.panTo(userLocation);
              addRoutingControl(userLocation);
            }
          });
        },
        (error) => {
          console.error("Erreur de géolocalisation :", error.message);
        }
      );
    } else {
      console.error("La géolocalisation n'est pas prise en charge par ce navigateur.");
    }
  };

  const addRoutingControl = (userLocation) => {
    if (mapRef.current && restaurants.length > 0) {
      L.Routing.control({
        waypoints: [
          L.latLng(userLocation),
          L.latLng(restaurants[0].latitude, restaurants[0].longitude),
        ],
      }).addTo(mapRef.current.leafletElement);
    }
  };

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get("http://localhost:3001/restaurants");
        setRestaurants(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données des restaurants", error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div>
      <button onClick={getUserLocation}>Trouver ma position</button>
      <MapContainer center={mapCenter} zoom={13} ref={mapRef} whenReady={() => {}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup chunkedLoading iconCreateFunction={createClusterCustomIcon}>
          {restaurants.map((restaurant) => (
            <Marker
              position={[restaurant.latitude, restaurant.longitude]}
              icon={customIcon}
              key={restaurant.id}
            >
              <Popup>
                <div>
                  <h3>{restaurant.name}</h3>
                  <p>{restaurant.description}</p>
                  <p>Address: {restaurant.address}</p>
                  <p>Opening Hours: {restaurant.opening_hours}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}

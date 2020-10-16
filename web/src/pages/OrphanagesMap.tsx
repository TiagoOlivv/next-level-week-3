import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import api from "../services/api";
import Logo from "../images/logo.svg";
import mapIcon from "../utils/mapIcon";
import "../styles/pages/orphanages-map.css";

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

export default () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
  useEffect(() => {
    api.get("orphanages").then((response) => {
      setOrphanages(response.data);
    });
  }, []);
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={Logo} alt="Happy" />

          <h2>Escolhar um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Simplicio Mendes</strong>
          <span>Piauí</span>
        </footer>
      </aside>
      <Map
        center={[-7.8500785, -41.9097224]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {orphanages.map((orphanage) => {
          return (
            <Marker
              position={[orphanage.latitude, orphanage.longitude]}
              icon={mapIcon}
              key={orphanage.id}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map-popup"
              >
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#fff" />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>
      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
};

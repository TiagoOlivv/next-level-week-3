import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi'
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css'

import Logo from '../images/logo.svg';
import '../styles/pages/orphanages-map.css'

export default () => {
	return (
		<div id="page-map">
			<aside>
				<header>
					<img src={Logo} alt="Happy"/>

					<h2>Escolhar um orfanato no mapa</h2>
					<p>Muitas crianças estão esperando a sua visita :)</p>
				</header>
				<footer>				
					<strong>Picos</strong>
					<span>Piauí</span>
				</footer>
				<Link to="" className="create-orphanage">
					<FiPlus size={32} color="#fff" />
				</Link>
			</aside>
			<Map 
					center={[-7.8500785,-41.9097224]} 
					zoom={15} 
					style={{ width: '100%', height: '100%' }} 
				>
					<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
				</Map>
		</div>	
	);
};
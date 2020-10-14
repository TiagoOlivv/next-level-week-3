import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi'

import '../styles/pages/landing.css'

import Logo from '../images/logo.svg'

export default () => {
	return (
		<div id="page-landing">
      <div className="content-wrapper">
        <img src={Logo} alt="Happy"/>
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças..</p>
        </main>

        <div className="location">
          <strong>Picos</strong>
          <span>Piauí</span>
        </div>


        <Link className="enter-app" to="/app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
  
      </div>
    </div>
	);
};
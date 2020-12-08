import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = (props) => {
    return (
        <div className="navbar-wrapper">
            <Link to='/'>
                <div className="logo-light_box">
                    <div className="logo-light logo-light_01"></div>
                    <div className="logo-light logo-light_02"></div>
                    <div className="logo-light logo-light_03"></div>
                    <img className="homepage-image" src="./images/paris-events-logo.jpg" alt="homepage logo" />
                </div>
            </Link>   
            <ul>
                <li>
                <Link to='/'>Accueil</Link>
                </li>
                <li>
                    <Link to='/events'>Liste des événements</Link>  
                </li>
                <li>
                    <Link to='/favorites'>Favoris</Link>
                </li>
            </ul> 
        </div>          
    )   
};

export default Navbar;
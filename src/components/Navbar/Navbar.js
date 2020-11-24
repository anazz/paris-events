import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = (props) => {
    return (
        <div className="navbar-wrapper">
            <img className="homepage-image" src="./images/paris-events-logo.jpg" alt="homepage logo" />
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
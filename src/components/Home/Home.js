import React, { useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
// import LocalStorageFavorites, { fetchAll, isFavorite, saveFavorite, removeFavorite } from '../services/Favorites';
import axios from 'axios';
import './Home.scss';

const Home = (props) => {

    const id = props.event.record.id;
    const event = props.event.record;
    console.log(id);

    /* FAVORITES */

    // const STORAGE_KEY = "favorites.events";

    // const [favorites, setFavorites] = useState('');

    // const fetchAll = () => {
    //     return JSON.parse.localStorage.getItem(STORAGE_KEY) || [];
    //     // return JSON.parse.localStorage.getItem(STORAGE_KEY);
    // };

    // const isFavorite = (id) => {
    //     setFavorites(fetchAll);
    //     return (favorites.find(event => event.id === id));
    // };

    // const saveFavorite = (event) => {
    //     if (isFavorite(event.event.id)) {
    //         return setFavorites(fetchAll),
    //         favorites.push(event),
    //         localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
    //     } 
    // }

    // const removeFavorite = (event) => {
    //     if (isFavorite(event.event.id)) {
    //         return setFavorites(fetchAll);
    //     }

    //     const eventIndex = favorites.findIndex(e => e.event.id === event.event.id)

    //     if(eventIndex === -1) {
    //         return favorites.splice(eventIndex, 1),
    //         localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
    //     }    
    // }
    
    return (
        <div className="home-wrapper">
            <div className="title-wrapper">
                <h1>Paris Events</h1>
            </div>
            <div className="description-wrapper">
                <p>L'application qui permet de rechercher en direct les prochains événements Parisiens</p>
            </div>
            <div className="comming-soon-wrapper">
                <h2 className="comming-soon-title"><span className="first">Act</span><span className="second">ua</span><span className="third">lité</span></h2>
                <p className="comming-soon-description">Le dernier événement publié :</p>
            </div>
            <div className="events-wrapper">
                <div className="event-wrapper">
                <Link to={`/event/${id}`} params={id}>
                    <img src={props.event.record.fields.cover.url} alt=""/>
                </Link>    
                    <div className="event-top-wrapper">
                        <span className="event-title">{props.event.record.fields.title}</span>
                        <a href="#" className="subscribe">
                            <div className="icon">
                                <span>&#128151;</span>
                            </div>
                        </a>
                    </div>
                    <span className="event-date">{props.event.record.fields.date_start}</span>
                    <p className="event-description">{props.event.record.fields.lead_text}</p>
                </div>
            </div>
        </div>
    )    
};

export default Home;
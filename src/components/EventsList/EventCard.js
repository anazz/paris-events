import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EventSelected from './EventSelected';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './EventsList.scss';


const EventCard = (props) => {

    /* FAVORITES */

    const [likes, setLikes] = useState();

    const STORAGE_KEY = 'favoriteEvents';

    const toggleFavorite = (event) => {
        const favorites = JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || [];
        
        
        // Vérification de la présence de "event" dans le tableau de favoris
        // Si présent, on le retire, sinon on l'ajoute

        let favIndex = favorites.findIndex(fav => fav.record.id === event.record.id);

        if (favIndex > -1) {
            // Suppression dans le tableau
            favorites.splice(favIndex, 1);
            // window.location.reload();
            setLikes(false);
            if(window.location.pathname=="/favorites") {
                window.location.reload();
            }
            console.log('Favoris retiré !');
        } else {
            // Ajout dans le tableau
            favorites.push(event);
            setLikes(true);
            console.log('Favoris ajouté !');
        }
        // Sauvegarde du tableau modifié
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    };

    const id = props.event.record.id;
    const record = props.event.record;

    /* Check if event is in Local Storage, to apply a certain style on the event card */
    // const STORAGE_KEY = 'favoriteEvents';
    // const [storageKeys, setStorageKeys] = useState([]);
    const storage = JSON.parse(localStorage.getItem(STORAGE_KEY) || []);
    // console.log(storage);
    const filterEvent = storage.filter(element => element.record.id == id);
    const findEvent = storage.find(element => element.record.id == id);
    // console.log(findEvent);
    // storage.forEach(element => console.log(Array.from((element.record.id))));

	return (
        <div className="event-card-wrapper">
            <Link to={`/event/${id}`} params={id}>
                <img src={record.fields.cover.url} alt=""/>
            </Link>
            <div className="card-top-wrapper">  
                <span className="card-title">{record.fields.title}</span>
                <a href="#" id="#subscribe" className="subscribe" onClick={(e) => {e.preventDefault(); toggleFavorite(props.event)}}>                   
                    <div className="icon" id="#icon">
                        {/* <span>&#128151;</span> */}
                        {/* <i class="fa">&#xf08a;</i> */}
                        <i className={likes==true || 
                        window.location.pathname=="/favorites" ||
                        storage.find(element => element.record.id == id)
                        ? 'fa fa-heart' : 'fa fa-heart-o'} aria-hidden="true"></i>
                    </div>
                </a>
            </div>
            <span className="card-date">{record.fields.date_start}</span>
            <p className="event-description">{record.fields.lead_text}</p>
        </div>
	);
};

export default EventCard;
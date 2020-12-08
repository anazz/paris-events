import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './EventsList.scss';


const EventCard = (props) => {

    /* FAVORITES */

    const [likes, setLikes] = useState();

    const STORAGE_KEY = 'favoriteEvents';

    const toggleFavorite = (event) => {
        const favorites = JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || [];
       
        // Checking the presence of an event in the favorites array
        // If it's present great, otherwise we add it

        let favIndex = favorites.findIndex(fav => fav.record.id === event.record.id);

        if (favIndex > -1) {
            // Delete in the array
            favorites.splice(favIndex, 1);
            // window.location.reload();
            setLikes(false);
            if(window.location.pathname === "/favorites") {
                window.location.reload();
            }
            console.log('Favoris retiré !');
        } else {
            // Add to array
            favorites.push(event);
            setLikes(true);
            console.log('Favoris ajouté !');
        }
        // Saving the modified array
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    };

    const id = props.event.record.id;
    const record = props.event.record;

    /* Check if event is in Local Storage, to apply a certain style on the event card */

    const reloadLikes = () => {
        const favorites = JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || [];
        if (favorites) {
            return favorites.find(element => element.record.id === id);
        }
    }

    /* Date format change */
    
    const stringDate = new Date(record.fields.date_start.slice(0, 10)); 
    const eventDate = () => {
        const day = stringDate.getDate() + '-';
        const year = '-' + stringDate.getFullYear();
        if (stringDate.getMonth() < 10) {
            return day + '0' + stringDate.getMonth() + year;
        } else {
            return day + stringDate.getMonth() + year;
        } 
    }

	return (
        <div className="event-card-wrapper">
            <Link className="link-event-page" to={`/event/${id}`} params={id}>
                <img src={record.fields.cover.url} alt=""/>
                <div className="card-top-wrapper">  
                    <span className="card-title">{record.fields.title}</span>
                    <a href="/#" id="subscribe" className="subscribe" onClick={(e) => {e.preventDefault(); toggleFavorite(props.event)}}>                   
                        <div className="icon" id="icon">
                            <i className={likes === true || 
                            window.location.pathname === "/favorites" || 
                            reloadLikes()
                            ? 'fa fa-heart' : 'fa fa-heart-o'} aria-hidden="true"></i>
                        </div>
                    </a>
                </div>
                <span className="card-date">À partir de: {eventDate()}</span>
                <p className="card-event-description">{record.fields.lead_text}</p>
            </Link>
        </div>
	);
};

export default EventCard;
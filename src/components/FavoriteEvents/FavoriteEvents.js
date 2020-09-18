import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './FavoriteEvents.scss';
import EventCard from '../EventsList/EventCard';

const FavoriteEvents = (props) => {
    const STORAGE_KEY = 'favoriteEvents';
    const storage = JSON.parse(localStorage.getItem(STORAGE_KEY) || []);
    console.log(storage);

    /* FAVORITES */

    // const STORAGE_KEY = 'favoriteEvents';

    const removeFavorite = (event) => {
        // const favorites = JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || [];
        /*favorites.forEach(function(index) {
            if(index >= 0) {
                // favorites.splice(index, 1);
                localStorage.removeItem(event.id);
                return localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
            }
        })*/
    };

    return (
        <div className="favorite-events-wrapper">
            <h2>Favorite Events</h2>
            <div className="favorite-list-wrapper">
                <ul>
                    {storage.map(event => (
                    <li key={event.id} className="favorite-list-el">
                        <EventCard key={event.id} event={event} />
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    )    
};

export default FavoriteEvents;
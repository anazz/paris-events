import React from 'react';
import './FavoriteEvents.scss';
import EventCard from '../EventsList/EventCard';
import '../EventsList/EventsList.scss';

const FavoriteEvents = (props) => {
    const STORAGE_KEY = 'favoriteEvents';
    const storage = JSON.parse(localStorage.getItem(STORAGE_KEY) || []);
    console.log(storage);
    storage.forEach(element => console.log(element.record.id));
    // console.log(storage.forEach(element => ));

    // const onUpdateLike = () => {
    //     setLikes(true);
    // }

    return (
        <div className="events-section-wrapper">
            <h2>Favorite Events</h2>
            <div className="events-list-wrapper">
                <ul>
                    {storage.map(event => (
                    <li key={event.id} className="event-list-el">
                        <EventCard key={event.id} event={event} />
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    )    
};

export default FavoriteEvents;
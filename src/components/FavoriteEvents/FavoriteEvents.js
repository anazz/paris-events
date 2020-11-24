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
    

    const favEvents = () => {
        if (localStorage.getItem('id') === '') {
            return (
                <p className="noFavs">Vouz n'avez pas des favoris pour l'instant. Pour en ajouter, veuillez rechercher des événements sur la page <a href="/events">Liste des événements.</a></p>
            );
        } else if (localStorage.getItem('id') !== '') {
            return (
            <ul>
                {storage.map(event => (            
                    <li key={event.id} className="event-list-el">
                        <EventCard key={event.id} event={event} />
                    </li>
                ))}
            </ul>
            );
        }
    };   

    return (
        <div className="events-section-wrapper">
            <div className="fluid-grid">
                <div className="row">
                    <div className="col-offset-1 col-9">
                        <h2 className="favorites-page-title">Favorite Events</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-9">
                        <div className="events-list-wrapper">
                            {favEvents()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )   
};

export default FavoriteEvents;
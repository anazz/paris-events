import React from 'react';
import './FavoriteEvents.scss';
import EventCard from '../EventsList/EventCard';
import '../EventsList/EventsList.scss';

const FavoriteEvents = (props) => {
    const STORAGE_KEY = 'favoriteEvents';
    const storage = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    console.log(storage);
    storage.forEach(element => console.log(element.record.id));
    
    const checkFavEvents = () => {
        if (storage.length === 0) {
            return (
                <div className="noFavs-wrapper">
                    <p className="noFavs">Vouz n'avez pas des favoris pour l'instant. Pour en ajouter, veuillez rechercher des événements sur la page:</p>
                    <a href="/events">Liste des événements</a>
                </div>
            );
        }    
    };

    return (
        <div className="events-section-wrapper">
            <div className="fluid-grid">
                <div className="row">
                    <div className="col-offset-1 col-9 md-col-offset-1 md-col-9">
                        <div className="avorites-page-title-wrapper">
                            <h2 className="favorites-page-title">&Eacute;vénements Favoris</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-7 md-col-9">
                        <div className="events-list-wrapper">
                            {checkFavEvents()}
                            <ul>
                                {storage.map(event => (            
                                    <li key={event.id} className="event-list-el">
                                        <EventCard key={event.id} event={event} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )   
};

export default FavoriteEvents;
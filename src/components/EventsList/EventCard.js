import React, { Fragment, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import EventSelected from './EventSelected';

const useStateWithLocalStorage = localStorageKey => {
    // const STORAGE_KEY = "favorites.events";
    // const [value, setValue] = useState(
    //     JSON.parse.localStorage.getItem(localStorageKey) || ''
    // );
   
    // useEffect(() => {
    //   localStorage.setItem(localStorageKey, JSON.stringify(value));
    // }, [JSON.stringify(value)]);
   
    // return [value, setValue];
  };

const EventCard = (props) => {
    // console.log(typeof props.event.record.id);
    // let {slug} = useParams();
    // console.log({slug});

    // const eventSelected = props.events.map((event) => (
    //     // console.log(event),
    //     <Event
    //         key={event.record.id}
	// 		event={event}
	// 	/>
    // ));

    

    /* FAVORITES */
    // const [favorites, setFavorites] = useState([]);

    const STORAGE_KEY = 'favoriteEvents';
    
    // const addToStorage = localStorage.setItem(STORAGE_KEY, JSON.stringify(event));

    const toggleFavorite = (event) => {
        const favorites = JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || [];
        
        // Vérification de la présence de "event" dans le tableau de favoris
        // Si présent, on le retire, sinon on l'ajoute

        let favIndex = favorites.findIndex(fav => fav.record.id === event.record.id);

        if (favIndex > -1) {
            // Suppression dans le tableau
            favorites.splice(favIndex, 1);
            console.log('Favoris retiré !');
        } else {
            // Ajout dans le tableau
            favorites.push(event);
            console.log('Favoris ajouté !');
        }
        
        // Sauvegarde du tableau modifié
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    };

    const id = props.event.record.id;
    const record = props.event.record;

	return (
            <div className="event-card-wrapper">
                <Link to={`/event/${id}`} params={id}>
                    <img src={record.fields.cover.url} alt=""/>
                </Link>
                <div className="card-top-wrapper">  
                    <span className="card-title">{record.fields.title}</span>
                    <a href="#" className="subscribe" onClick={(e) => { e.preventDefault(); toggleFavorite(props.event) }}>
                        <div className="icon">
                            <span>&#128151;</span>
                        </div>
                    </a>
                    {/* <button type="button" class="btn btn-outline-success" onClick={() => addFavorite(event)}>&#128151;</button> */}
                </div>
                <span className="card-date">{record.fields.date_start}</span>
                <p className="event-description">{record.fields.lead_text}</p>
                {/* <p className="card-description">{record.fields.description.replace(/(<([^>]+)>)/ig, '')}</p>    */}
            </div>
	);
};

export default EventCard;
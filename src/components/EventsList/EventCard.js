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
    const id = props.event.record.id;
    const event = props.event.record;
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
    const [favorites, setFavorites] = useState([]);

    const STORAGE_KEY = 'favoriteEvents';
    const setStorage = JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || [];
    const addToStorage = localStorage.setItem(STORAGE_KEY, JSON.stringify(event));

    // const checkFavorite = (eventId) => {
    //     const favorites = setFavorites(setStorage);
    //     return (favorites.find(event => event.eventId === eventID));
    // };

    const addFavorite = (event) => {
        setFavorites(setStorage);
        favorites.push(event);
        return localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    };

	return (
            <div className="event-card-wrapper">
                <Link to={`/event/${id}`} params={id}>
                    <img src={props.event.record.fields.cover.url} alt=""/>
                </Link>
                <div className="card-top-wrapper">  
                    <span className="card-title">{props.event.record.fields.title}</span>
                    <a href="#" className="subscribe" onClick={() => addFavorite(event)}>
                        <div className="icon">
                            <span>&#128151;</span>
                        </div>
                    </a>
                    {/* <button type="button" class="btn btn-outline-success" onClick={() => addFavorite(event)}>&#128151;</button> */}
                </div>
                <span className="card-date">{props.event.record.fields.date_start}</span>
                <p className="event-description">{props.event.record.fields.lead_text}</p>
                {/* <p className="card-description">{props.event.record.fields.description.replace(/(<([^>]+)>)/ig, '')}</p>    */}
            </div>
	);
};

export default EventCard;
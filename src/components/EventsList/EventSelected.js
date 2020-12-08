import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './EventSelected.scss';

const EventSelected = (props) => {
    
    let id = useParams()
    // console.log(id.id);
    const idEvent = id.id;
    // console.log(idEvent);

    const [results, setResults] = useState({});

    const API_EVENT_URL = `https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records/${idEvent}`;

    /* Api search query */

    useEffect(() => {
        axios.get(API_EVENT_URL)
        .then((r) => {
        console.log(r.data.record.fields);
        setResults(r.data.record.fields);
        }).catch((error) => {
        console.log(error);
        });   
    }, [API_EVENT_URL]);

    /* TEMPORARY QUERY FOR FAVORITES */

    const [eventResult, setEventResult] = useState({});

    useEffect(() => {
        axios.get(API_EVENT_URL)
        .then((r) => {
        console.log(r.data);
        setEventResult(r.data);
        }).catch((error) => {
        console.log(error);
        });   
    }, [API_EVENT_URL]);

    /* FAVORITES */

    const [likes, setLikes] = useState();

    const STORAGE_KEY = 'favoriteEvents';

    console.log(eventResult);
    
    const toggleFavorite = (event) => {
        const favorites = JSON.parse(window.localStorage.getItem('favoriteEvents')) || []; 
        
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

    /* Check if event is in Local Storage, to apply a certain style to the event card */

    const checkLikes = () => {
        const favorites = JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || [];
        if (favorites) {
           const favEvent = favorites.find(element => element.record.id === id);
           if (favEvent) {
               return true;
            }
        }
    }

    /* Date format change */
    
    const eventDate = () => {
        if(results.date_start === undefined) {
            console.log("date undefined");
        } else {
            const stringDate = new Date(results.date_start.slice(0, 10));
            const day = stringDate.getDate() + '-';
            const year = '-' + stringDate.getFullYear();
            if (stringDate.getMonth() < 10) {
                return day + '0' + stringDate.getMonth() + year;
            } else {
                return day + stringDate.getMonth() + year;
            }
        }
    }
    

    return (   
        <div className="event-main-wrapper">
            <div className="fluid-grid">
                <div className="row">
                    <div className="col-9 md-col-9">
                        <div className="event-wrapper">
                            <div className="left-wrapper">
                                <h4>{results.title}</h4>
                                <div className="poster-wrapper">
                                    <img src={results.cover_url} alt=""/>
                                </div>
                                <span>{results.lead_text}</span>
                                <div className="description-wrapper">
                                    <p dangerouslySetInnerHTML={{__html:results.description}}></p>
                                </div>
                            </div>
                            <div className="right-wrapper">
                                <div className="event-info-wrapper">
                                    <div className="subscribe-wrapper">
                                        <a href="/#" className="subscribe" onClick={(e) => {e.preventDefault(); toggleFavorite(eventResult)}}>
                                            <div className="icon" id="icon">
                                            <i className={likes === true || 
                                                window.history.previous === "/favorites" || 
                                                checkLikes()
                                                ? 'fa fa-heart' : 'fa fa-heart-o'} aria-hidden="true"></i>
                                                <span>Sauvegarder</span>
                                            </div>
                                        </a>
                                    </div>    
                                    <div className="dates-wrapper">
                                        <span>Dates: </span>
                                        <p>{eventDate()}</p>
                                    </div>
                                    <div className="price-wrapper">
                                        <span>Prix: </span>
                                        <p>{results.price_detail}</p>
                                    </div>
                                    <div className="adddress-wrapper">
                                        <span>Adresse: </span>
                                        <p>{results.address_name}</p>
                                        <p>{results.address_street}</p>
                                        <p>{results.address_zipcode}, {results.address_city}</p>
                                    </div>
                                    <div className="transport-wrapper">
                                        <span>En transport: </span>
                                        <p>{results.transport}</p>
                                    </div>
                                    <div className="contact-info-wrapper">
                                        <span>Contact: </span>
                                        <span role="img" aria-label="xxxxx">☎️: {results.contact_phone}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );   
};

export default EventSelected;
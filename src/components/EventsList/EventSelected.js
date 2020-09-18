import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './EventSelected.scss'

const EventSelected = (props) => {
    
    let id = useParams()
    // console.log(id.id);
    const idEvent = id.id;
    console.log(idEvent);

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
    }, []);

    // console.log(eventResults.map(record => record.id));
    console.log(results);

    /* TEMPORARY QUERY FOR FAVORITES */

    const [eventResults, setEventResults] = useState({});

    // const API_EVENT_URL = `https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records/${idEvent}`;

    useEffect(() => {
        axios.get(API_EVENT_URL)
        .then((r) => {
        console.log(r.data.record);
        setEventResults(r.data.record);
        }).catch((error) => {
        console.log(error);
        });   
    }, []);

    /* FAVORITES */

    const STORAGE_KEY = 'favoriteEvents';

    const toggleFavorite = (event) => {
        const favorites = JSON.parse(window.localStorage.getItem('favoriteEvents')) || []; 
        
        // Vérification de la présence de "event" dans le tableau de favoris
        // Si présent, on le retire, sinon on l'ajoute

        let favIndex = favorites.findIndex(fav => fav.record.id === event.record.recordID);
        let subscribe = document.getElementById("#subscribe");

        if (favIndex > -1) {
            // Suppression dans le tableau
            favorites.splice(favIndex, 1);
            // subscribe.style.backgroundColor = "white";
            console.log('Favoris retiré !');
        } else {
            // Ajout dans le tableau
            favorites.push(event);
            // subscribe.style.backgroundColor = "hotpink";
            console.log('Favoris ajouté !');
        }
        // Sauvegarde du tableau modifié
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    };

    const recordID = eventResults.id;
    const record = eventResults;

    return (   
        <div className="event-main-wrapper">
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
                            <a href="#" className="subscribe" onClick={(e) => {toggleFavorite() }}>
                                <div className="icon">
                                    <span>&#128151; Sauvegarder</span>
                                </div>
                            </a>
                        </div>    
                        <div className="dates-wrapper">
                            <span>Dates: </span>
                            <p>{results.date_start}</p>
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
                            <p>☎️:{results.contact_phone}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );   
};

export default EventSelected;
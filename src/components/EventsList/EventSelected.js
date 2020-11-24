import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './EventSelected.scss';

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
    });

    // console.log(eventResults.map(record => record.id));
    console.log(results);

    /* TEMPORARY QUERY FOR FAVORITES */

    const [eventResult, setEventResult] = useState({});

    // const API_EVENT_URL = `https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records/${idEvent}`;

    useEffect(() => {
        axios.get(API_EVENT_URL)
        .then((r) => {
        console.log(r.data);
        setEventResult(r.data);
        }).catch((error) => {
        console.log(error);
        });   
    });

    console.log(eventResult.record);

    /* FAVORITES */

    const [likes, setLikes] = useState();

    const STORAGE_KEY = 'favoriteEvents';

    const toggleFavorite = (event) => {
        const favorites = JSON.parse(window.localStorage.getItem('favoriteEvents')) || []; 
        
        // Vérification de la présence de "event" dans le tableau de favoris
        // Si présent, on le retire, sinon on l'ajoute

        let favIndex = favorites.findIndex(fav => fav.record.id === event.record.id);
        // console.log(favIndex);

        if (favIndex > -1) {
            // Suppression dans le tableau
            favorites.splice(favIndex, 1);
            // window.location.reload();
            setLikes(false);
            if(window.location.pathname === "/favorites") {
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

    /* Check if event is in Local Storage, to apply a certain style on the event card */
    // const STORAGE_KEY = 'favoriteEvents';
    // const [storageKeys, setStorageKeys] = useState([]);
    const storage = JSON.parse(localStorage.getItem(STORAGE_KEY) || []);
    // console.log(storage);
    // const filterEvent = storage.filter(element => element.record.id == idEvent);
    // const findEvent = storage.find(element => element.record.id == idEvent);
    // console.log(findEvent);
    // storage.forEach(element => console.log(Array.from((element.record.id))));

    /* Date format change */
    // const stringDate = new Date(results.date_start.slice(0, 10)); 
    // const eventDate = () => {
    //     const day = stringDate.getDate() + '-';
    //     const year = '-' + stringDate.getFullYear();
    //     if (stringDate.getMonth() < 10) {
    //         return day + '0' + stringDate.getMonth() + year;
    //     } else {
    //         return day + stringDate.getMonth() + year;
    //     } 
    // }

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
                            <a href="/#" className="subscribe" onClick={(e) => {toggleFavorite(eventResult)}}>
                                <div className="icon">
                                    {/* <span>&#128151; Sauvegarder</span> */}
                                    <i className={likes === true || 
                                        window.location.pathname === "/favorites" ||
                                        storage.find(element => element.record.id === idEvent)
                                        ? 'fa fa-heart' : 'fa fa-heart-o'} aria-hidden="true"></i>
                                    <span>Sauvegarder</span>
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
                            <span role="img" aria-label="xxxxx">☎️: {results.contact_phone}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );   
};

export default EventSelected;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './EventSelected.scss'

const EventSelected = (props) => {
    // const [idEvent, setIdEvent] = useState("");

    let id = useParams()
    // console.log(id.id);
    const idEvent = id.id;
    console.log(idEvent);

    const [eventResults, setEventResults] = useState({});

    const API_EVENT_URL = `https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records/${idEvent}`;
    // const eventSelected = props.events.map((event) => (
    //     console.log(event),
    // ));

    /* Api search query */

    useEffect(() => {
        axios.get(API_EVENT_URL)
        .then((r) => {
        console.log(r.data.record.fields);
        setEventResults(r.data.record.fields);
        }).catch((error) => {
        console.log(error);
        });   
    }, []);

    console.log(eventResults.description);
    // const eventDescription = document.write(eventResults.description);

    /* FAVORITES */

    return (   
        <div className="event-main-wrapper">
            <h2>Event page</h2>
            <div className="event-wrapper">
                <div className="left-wrapper">
                    <h4>{eventResults.title}</h4>
                    <div className="poster-wrapper">
                        <img src={eventResults.cover_url} alt=""/>
                    </div>
                    <span>{eventResults.lead_text}</span>
                    <div className="description-wrapper">
                        <p>{eventResults.description}</p>
                    </div>
                </div>
                <div className="right-wrapper">
                    <div className="event-info-wrapper">
                        <div className="subscribe-wrapper">
                            <a href="#" className="subscribe">
                                <div className="icon">
                                    <span>&#128151; Sauvegarder</span>
                                </div>
                            </a>
                        </div>    
                        <div className="dates-wrapper">
                            <span>Dates: </span>
                            <p>{eventResults.date_start}</p>
                        </div>
                        <div className="price-wrapper">
                            <span>Prix: </span>
                            <p>{eventResults.price_detail}</p>
                        </div>
                        <div className="adddress-wrapper">
                            <span>Adresse: </span>
                            <p>{eventResults.address_name}</p>
                            <p>{eventResults.address_street}</p>
                            <p>{eventResults.address_zipcode}, {eventResults.address_city}</p>
                        </div>
                        <div className="transport-wrapper">
                            <span>En transport: </span>
                            <p>{eventResults.transport}</p>
                        </div>
                        <div className="contact-info-wrapper">
                            <span>Contact: </span>
                            <p>☎️:{eventResults.contact_phone}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );   
};

export default EventSelected;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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

    // console.log(eventResults);

    return (   
        <div className="event-main-wrapper">
            <h2>Event page</h2>
            <div className="event-wrapper">
                <h4>{eventResults.title}</h4>
                <span></span>
                <p></p>
            </div>
        </div>
    );   
};

export default EventSelected;
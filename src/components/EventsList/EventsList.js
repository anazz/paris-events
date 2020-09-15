import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Events from './Events';
import './EventsList.scss';

const EventsList = (props) => {

    const [events, setEvents] = useState([]);

    const [searchResults, setSearchResults] = useState([]);

    const [formData, setFormData] = useState({
        category: ''
    });

    const API_SEARCH_URL = `https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?search=${formData.category}`;

    useEffect(() => {
        if(formData.category.length > 1) {
            axios.get(API_SEARCH_URL)
            .then((r) => {
                console.log(r.data.records);
                setSearchResults(r.data.records);
            }).catch((error) => {
                console.log(error);
            });
        }    
    }, [formData.category]);

    /* Setting the formData */
    
    const onUpdateData = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        const data = { ...formData };
        data[name] = value;
        setFormData(data);
        // console.log(data); 
    };

    const onSubmitForm = (event) => {
        event.preventDefault();
        // console.log(formData);
        setEvents(searchResults);
	};

    return (
        <div className="events-section-wrapper">
            <h2>Events</h2>

            {/* SEARCH BY EVENT CATEGORY */}

            <div className="search-wrapper">
                <form action="" onSubmit={onSubmitForm}>
                    <div className="search-form-wrapper">
                        <input
                            className="form-control"
                            type="text"
                            id="category-search"
                            name="category"
                            value={formData.category}
                            onChange={onUpdateData}
                        />
                    </div>
                    <button className="btn btn-info" id="submit" name="submit" type="submit">Rechercher événement</button>
                </form>
            </div>

            {/* LISTED EVENTS */}

            <div className="events-list-wrapper">
                <ul>
                    {events.map(event => (
                    <Events 
                        key={event.record.id}
                        event={event}
                    />
                    ))}
                </ul>
            </div>
        </div>
    )    
};

export default EventsList;
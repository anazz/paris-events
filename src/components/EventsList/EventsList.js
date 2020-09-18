import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventCard from './EventCard';
import './EventsList.scss';

const EventsList = (props) => {

    const [searchResults, setSearchResults] = useState([]);

    const [formData, setFormData] = useState({
        category: ''
    });

    const API_SEARCH_URL = `https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?search=${formData.category}`;

    /* Api search query */

    /* Setting the formData */
    
    const onUpdateData = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        const data = { ...formData };
        data[name] = value;
        setFormData(data);
    };

    const onSubmitForm = (event) => {
        event.preventDefault();
        if(formData.category.length > 1) {
            axios.get(API_SEARCH_URL)
            .then((r) => {
                console.log(r.data.records);
                setSearchResults(r.data.records);
            }).catch((error) => {
                console.log(error);
            });
        }
    };

    return (
        <div className="events-section-wrapper">
            <h2>Liste des événements</h2>

            {/* SEARCH BY EVENT CATEGORY */}

            <div className="search-wrapper">
                <form action="" onSubmit={onSubmitForm}>
                    <div className="search-form-wrapper">
                        <input
                            className="form-control"
                            type="text"
                            id="category-search"
                            name="category"
                            onChange={onUpdateData}
                            value={formData.category}
                        />
                    </div>
                    <button className="btn btn-outline-success" id="submit" name="submit" type="submit">Rechercher événement</button>
                </form>
            </div>

            {/* LISTED EVENTS */}

            <div className="events-list-wrapper">
                <ul>
                    {searchResults && searchResults.map(event => (
                        <li key={event.record.id} className="event-list-el">
                            <EventCard 
                                key={event.record.id}
                                event={event}
                            />
                        </li> 
                    ))}
                </ul>
            </div>
        </div>    
    )    
};

export default EventsList;
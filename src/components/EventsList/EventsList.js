import React, { useState } from 'react';
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
            }, [API_SEARCH_URL]);
        }
    };

    return (
        <div className="events-section-wrapper">
            <div className="fluid-grid">
                <div className="row">
                    <div className="col-9 md-col-offset-1 md-col-7">
                        <div className="title-wrapper">
                            <h2>Liste des événements</h2>
                        </div>
                    </div>
                </div>

                {/* SEARCH BY EVENT CATEGORY */}

                <div className="row">
                    <div className="col-offset-1 col-9 md-col-offset-1 md-col-7">
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
                                        placeholder="Recherchez des événements, par catégorie(example: cinéma, concerts...)"
                                    />
                                    <div className="mobile-placeholder">Recherchez des événements, par catégorie(example: cinéma, concerts...)</div>
                                </div>
                                <button className="btn btn-outline-success" id="submit" name="submit" type="submit">Rechercher</button>
                            </form>
                        </div>
                    </div>    
                </div>

                {/* LISTED EVENTS */}

                <div className="row">
                    <div className="col-9">
                        <div className="events-list-wrapper">
                            <ul id="events-list">
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
                </div>
            </div>
        </div>    
    )    
};

export default EventsList;
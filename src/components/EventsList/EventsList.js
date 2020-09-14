import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Events from './Events';
import './EventsList.scss';

const EventsList = (props) => {

    const [formData, setFormData] = useState({
        category: ''
    });

    /* Setting the formData */
    
    const onUpdateData = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        const data = { ...formData };
            data[name] = value;
            setFormData(data);
            console.log(data); 
    }


    return (
        <div className="events-section-wrapper">
            <h2>Events</h2>

            {/* SEARCH BY EVENT CATEGORY */}

            <div className="search-wrapper">
                    <form>
                        <div className="search-form-wrapper">
                        <input
                            className="form-control"
                            type="text"
                            id="category-search"
                            name="category"
                            value=""
                            onChange=""
                        />
                        </div>
                        <button className="btn btn-info">Rechercher événement</button>
                    </form>
            </div>

            {/* LISTED EVENTS */}

            <div className="events-list-wrapper">
                <ul>
                    <Events />
                </ul>
            </div>
        </div>
    )    
};

export default EventsList;
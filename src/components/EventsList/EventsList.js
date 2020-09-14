import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Events from './Events';
import './EventsList.scss';

const EventsList = (props) => {

    return (
        <div className="events-section-wrapper">
            <h2>Events</h2>
            <div className="events-list-wrapper">
                <ul>
                    <Events />
                </ul>
            </div>
        </div>
    )    
};

export default EventsList;
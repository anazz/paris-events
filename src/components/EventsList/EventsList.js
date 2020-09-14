import React from 'react';
import {Link} from 'react-router-dom';

const EventsList = (props) => {
    return (
        <div>
            <h2>Events</h2>
            <p>
            <Link to="/event">Event</Link>
            </p>
           
        </div>
    )    
};

export default EventsList;
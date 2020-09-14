import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './Home.scss';

const Home = (props) => {
    
    return (
        <div className="home-wrapper">
            <div className="title--wrapper">
                <h1>Paris Events</h1>
            </div>
            <div className="description-wrapper">
                <p>L'application qui permet de rechercher en direct les prochains événements Parisiens</p>
            </div>
            <div className="events-list-wrapper">
                <div className="event-wrapper">
                    <img src="" alt=""/>
                    <h4>Title: {props.event.record.fields.title}</h4>
                </div>
            </div>
        </div>
    )    
};

export default Home;
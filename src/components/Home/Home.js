import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './Home.scss';

const Home = (props) => {

    const eventsList = props.events.map((event) => (
        console.log(event.record.fields.date_start)
    ));
    
    return (
        <div className="home-wrapper">
            <div className="title--wrapper">
                <h1>Paris Events</h1>
            </div>
            <div className="description-wrapper">
                <p>L'application qui permet de rechercher en direct les prochains événements Parisiens</p>
            </div>
            <div className="event-list-wrapper">
                <ul>
                    <li>
                        <div className="event-wrapper">
                            <img src="" alt=""/>
                            <h4>Title: </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )    
};

export default Home;
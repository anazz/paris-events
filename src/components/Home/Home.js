import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './Home.scss';

const Home = (props) => {
    
    return (
        <div className="home-wrapper">
            <div className="title-wrapper">
                <h1>Paris Events</h1>
            </div>
            <div className="description-wrapper">
                <p>L'application qui permet de rechercher en direct les prochains événements Parisiens</p>
            </div>
            <div className="comming-soon-wrapper">
                <h2 className="comming-soon-title"><span className="first">Act</span><span className="second">ua</span><span className="third">lité</span></h2>
                <p className="comming-soon-description">Le dernier événement publié :</p>
            </div>
            <div className="events-wrapper">
                <div className="event-wrapper">
                    <img src={props.event.record.fields.cover.url} alt=""/>
                    <div className="event-top-wrapper">
                        <span className="event-title">{props.event.record.fields.title}</span>
                        <a href="#" className="subscribe">
                            <div className="icon">
                                <span>&#128151;</span>
                            </div>
                        </a>
                    </div>
                    <span className="event-date">{props.event.record.fields.date_start}</span>
                    <p className="event-description">{props.event.record.fields.lead_text}</p>
                </div>
            </div>
        </div>
    )    
};

export default Home;
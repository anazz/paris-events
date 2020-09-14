import React from 'react';
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
            <div className="event-list-wrapper">
                <ul>
                    <li>
                        <div className="event-wrapper">
                            <img src="" alt=""/>
                            <h2>Title: </h2>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )    
};

export default Home;
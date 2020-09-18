import React from 'react';
import './Home.scss';
import EventCard from '../EventsList/EventCard';
import '../EventsList/EventsList.scss';

const Home = (props) => {

    const id = props.event.record.id;
    const event = props.event;
    console.log(id);
    
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
                <EventCard event={event}/>
            </div>
        </div>
    )    
};

export default Home;
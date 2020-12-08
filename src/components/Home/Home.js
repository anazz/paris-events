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
            <div className="fluid-grid">
                <div className="row">
                    <div className="col-offset-1 col-9 md-col-7">
                        <div className="title-wrapper">
                            <h1>Paris Events</h1>
                        </div>
                        <div className="description-wrapper">
                            <p>L'application qui permet de rechercher en direct les prochains événements Parisiens</p>
                        </div>
                        <div className="comming-soon-wrapper">
                            <p className="comming-soon-description">Le dernier événement publié :</p>
                        </div>
                        <div className="events-wrapper">
                            <EventCard event={event}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )    
};

export default Home;
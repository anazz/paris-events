import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const EventCard = (props) => {

    // console.log(props.event.record.id);

    // const eventSelected = props.events.map((event) => (
    //     // console.log(event),
    //     <Event
    //         key={event.record.id}
	// 		event={event}
	// 	/>
    // ));

	return ( 
            <div className="event-card-wrapper"> 
                <Link to="/event">
                    <img src={props.event.record.fields.cover.url} alt=""/>
                </Link>
                <div className="card-top-wrapper">  
                    <span className="card-title">{props.event.record.fields.title}</span>
                    <a href="#" className="subscribe">
                        <div className="icon">
                            <span>&#128151;</span>
                        </div>
                    </a>
                </div>
                <span className="card-date">{props.event.record.fields.date_start}</span>
                <p className="event-description">{props.event.record.fields.lead_text}</p>
                {/* <p className="card-description">{props.event.record.fields.description.replace(/(<([^>]+)>)/ig, '')}</p>    */}
            </div>
	);
};

export default EventCard;
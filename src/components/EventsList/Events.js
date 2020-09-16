import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EventSelected from './EventSelected';
import EventCard from './EventCard';

const Events = (props) => {

    // console.log(props.event.record.fields);

    // const eventSelected = props.events.map((event) => (
    //     // console.log(event),
    //     <Event
    //         key={event.record.id}
	// 		event={event}
	// 	/>
    // ));

	return ( 
            <li key={props.event.record.id} className="event-list-el">
                <EventSelected
                    event={props.event}
                />
                <EventCard 
                    event={props.event}
                />
            </li> 
	);
};

export default Events;
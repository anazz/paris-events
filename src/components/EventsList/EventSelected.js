import React from 'react';
import Event from './Event';

const EventSelected = (props) => {
    console.log(props.event);
    // const eventSelected = props.events.map((event) => (
    //     console.log(event),
    // ));

    return (
        <div className="event-main-wrapper">
            {/* {props.events.map((event) => ( */}
            <Event
            /> 
            {/* ))}      */}
        </div>
    );   
};

export default EventSelected;
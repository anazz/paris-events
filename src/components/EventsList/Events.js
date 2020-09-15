import React from 'react';
import { Link } from 'react-router-dom';

const Events = (props) => {

    console.log(props.event.record.fields);

	return (       
        // <Link to="/event">
            <li key={props.event.record.id}>
                <div className="event-wrapper">
                    <img src="" alt=""/>
                    <h4>Title: {props.event.record.fields.title}</h4>
                </div>
            </li>
        // </Link> 
	);
};

export default Events;
import React from 'react';
import { Link } from 'react-router-dom';

const Events = (props) => {

	return (       
        <Link to="/event">
            <li>
                <div className="event-wrapper">
                    <img src="" alt=""/>
                    <h4>Title: </h4>
                </div>
            </li>
        </Link>
	);
};

export default Events;
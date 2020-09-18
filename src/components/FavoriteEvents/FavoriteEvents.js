import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './FavoriteEvents.scss';

const FavoriteEvents = (props) => {
    const storage = JSON.parse(localStorage.getItem('favoriteEvents') || '');
    console.log(storage);
    // console.log(event);
    const id = storage.id;

    return (
        <div className="favorite-events-wrapper">
            <h2>Favorite Events</h2>
            <div className="favorite-list-wrapper">
                <ul>
                    <li key={id} className="favorite-list-el">
                        {/* <h3>{storage.fields.title}</h3> */}
                        <div className="favorite-card-wrapper">
                            <Link to={`/event/${id}`} params={id}>
                                <img src={storage.fields.cover.url} alt=""/>
                            </Link>
                            <div className="card-top-wrapper">  
                                <span className="card-title">{storage.fields.title}</span>
                                <a href="#" className="subscribe">
                                    <div className="icon">
                                        <span>&#128151;</span>
                                    </div>
                                </a>
                                {/* <button type="button" class="btn btn-outline-success">&#128151;</button> */}
                            </div>
                            <span className="card-date">{storage.fields.date_start}</span>
                            <p className="favorite-description">{storage.fields.lead_text}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )    
};

export default FavoriteEvents;
import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import EventsList from './components/EventsList/EventsList';
import EventCard from './components/EventsList/EventCard';
import EventSelected from './components/EventsList/EventSelected';
import FavoriteEvents from './components/FavoriteEvents/FavoriteEvents';

function App() {
    /* FAVORITES */

    const STORAGE_KEY = "favorites.events";

    const [favorites, setFavorites] = useState('');

    const fetchAll = () => {
        return JSON.parse.localStorage.getItem(STORAGE_KEY) || [];
        // return JSON.parse.localStorage.getItem(STORAGE_KEY);
    };

    const isFavorite = (eventID) => {
        setFavorites(fetchAll);
        return (favorites.find(event => event.eventID === eventID));
    };

    const saveFavorite = (event) => {
        if (isFavorite(event.eventID)) {
            return setFavorites(fetchAll),
            favorites.push(event),
            localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
        } 
    }

    const removeFavorite = (event) => {
        if (isFavorite(event.eventID)) {
            return setFavorites(fetchAll);
        }

        const eventIndex = favorites.findIndex(e => e.eventID === event.eventID)

        if(eventIndex === -1) {
            return favorites.splice(eventIndex, 1),
            localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
        }    
    }
    
    /* useState for setting events records */

    const [eventsResults, setEventsResults] = useState([]);

    /* Retrieve events records from API */

    // const API_URL = `https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?rows=11&pretty=false&timezone=UTC`;
    const API_URL = `https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?rows=1&sort=-date_start&pretty=false&timezone=UTC`;
 
    useEffect(() => {
        axios.get(API_URL)
        .then((r) => {
            console.log(r.data.records);
            setEventsResults(r.data.records);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    // console.log(events);

    return (
        <Router>
        <div className="App">
            {/* Navbar */}
            <Navbar />
            <Switch>
            {/* Route for Home */}
            <Route 
                exact path='/'
                render={()=>
                <Fragment>
                    {eventsResults.map(event => (
                    <Home prods={Home} 
                        key= {event.record.id}
                        event={event}
                        saveFavorite={saveFavorite}
                        removeFavorite={removeFavorite}
                    />
                    ))}
                </Fragment>
                }
            />
            {/* Route for Events List */}
            <Route 
                exact path='/events'
                render={()=>
                <Fragment>
                    <EventsList prods={EventsList}/>
                </Fragment>
                }
            />
            {/* Route for Event */}
            <Route 
                exact path='/event/:id'
                // render={()=>
                // <Fragment>
                //     <EventSelected prods={EventSelected}/>
                // </Fragment>
                // }
                children={<EventSelected />}
            />
            {/* Route for Favorite Events */}
            <Route 
                exact path='/favorites'
                render={(props)=>
                <Fragment>
                    <FavoriteEvents prods={FavoriteEvents}/>
                </Fragment>
                }
            />
            </Switch>
        </div>
        </Router>
    );
}

export default App;

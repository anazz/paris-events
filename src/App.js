import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import EventsList from './components/EventsList/EventsList';
import Event from './components/EventsList/Event';
import FavoriteEvents from './components/FavoriteEvents/FavoriteEvents';

function App() {
    
    /* useState for setting events records */

    const [events, setEvents] = useState([]);

    /* Retrieve events records from API */

    // const API_URL = `https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?rows=11&pretty=false&timezone=UTC`;
    const API_URL = `https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?rows=100&sort=date_start&pretty=false&timezone=UTC`;
 
    useEffect(() => {
        axios.get(API_URL)
        .then((r) => {
            console.log(r.data.records);
            setEvents(r.data.records);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    console.log(events);

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
                    <Home prods={Home}
                        events={events}
                    />
                </Fragment>
                }
            />
            {/* Route for Events List */}
            <Route 
                exact path='/events'
                render={(props)=>
                <Fragment>
                    <EventsList prods={EventsList}/>
                </Fragment>
                }
            />
            {/* Route for Event */}
            <Route 
                exact path='/event'
                render={(props)=>
                <Fragment>
                    <Event prods={Event}/>
                </Fragment>
                }
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

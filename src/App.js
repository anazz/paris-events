import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import EventsList from './components/EventsList/EventsList';
import EventSelected from './components/EventsList/EventSelected';
import FavoriteEvents from './components/FavoriteEvents/FavoriteEvents';

function App() {
    
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
                exact path='/event'
                render={()=>
                <Fragment>
                    <EventSelected prods={EventSelected}/>
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

import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import './custom.scss';
import './App.scss';
/* Components */
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import EventsList from './components/EventsList/EventsList';
import EventSelected from './components/EventsList/EventSelected';
import FavoriteEvents from './components/FavoriteEvents/FavoriteEvents';

function App() {
    
    /* useState for setting events records */

    const [eventsResults, setEventsResults] = useState([]);

    /* Retrieve events records from API */

    const API_URL = `https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?rows=1&sort=-date_start&pretty=false&timezone=UTC`;
 
    useEffect(() => {
        axios.get(API_URL)
        .then((r) => {
            console.log(r.data.records);
            setEventsResults(r.data.records);
        }).catch((error) => {
            console.log(error);
        });
    }, [API_URL]);

    // console.log(events);

    return (
        <Router>
            <div className="App">
                <div className="fluid-grid">
                    <div className="row">
                        {/* Navbar */}
                        <Navbar />
                        <div className="col-offset-2">
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
                            exact path='/event/:id'
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
                    </div> 
                </div>    
            </div>
        </Router>
    );
}

export default App;

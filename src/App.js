import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import EventsList from './components/EventsList/EventsList';
import Event from './components/EventsList/Event';
import FavoriteEvents from './components/FavoriteEvents/FavoriteEvents';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar />
        <Switch>
          {/* Route for Home */}
          <Route 
            exact path='/'
            render={(props)=>
              <Fragment>
                <Home prods={Home}/>
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

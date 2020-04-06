import React from 'react';
import { Route } from 'react-router-dom';
//Import allows to create Routes
import './App.css';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Navigation />
    <Route exact path='/' component={Home} /> {/* Set the Route for the Home component */}
    <Route path='/about' component={About} /> {/* Set the Route for the About component */}
    <Route path='/contact' component={Contact} /> {/* Set the Route for the Concact component */}
  </div>
);

export default App;

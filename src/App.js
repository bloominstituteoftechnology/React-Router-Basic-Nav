import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    
    <Route exact path="/">
        </Route>
        <Route exact path="/About"></Route>
        <Route exact path="/Contact"></Route>
        <Navigation />
  </div>
);

export default App;

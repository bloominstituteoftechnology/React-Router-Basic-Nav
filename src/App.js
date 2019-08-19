import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';

const App = () => (
  <div className="App">
    <Route exact path="/" component={Navigation} />
    <Route exact path="/Home" component={Home} />
    <Route exact path="/About" component={About} />
    <Route exact path="/Contact" component={Contact} />

  </div>
);

export default App;

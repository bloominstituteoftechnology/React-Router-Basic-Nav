import React from 'react';

import { Route } from 'react-router-dom';

import { Home, About, Contact, Navigation } from './components';


import './App.css';


const App = () => (
  <div>
    <Navigation />
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
  </div>
);

export default App;

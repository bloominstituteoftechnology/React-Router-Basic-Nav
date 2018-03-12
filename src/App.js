import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import { Navigation, Home, About, Contact } from './components';

const App = () => (
  <Router>
    <div>
      <Navigation /> 
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
)

export default App;

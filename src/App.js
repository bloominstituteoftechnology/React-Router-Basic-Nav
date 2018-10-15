import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => (
  <div>
    <Navigation />
    <Route exact path="/" component={Home} />
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />
  </div>
);

export default App;

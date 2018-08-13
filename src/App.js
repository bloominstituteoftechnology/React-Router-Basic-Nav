import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Navigation />
  </div>
  <Route exact path="/" component={Home}></Route>
  <Route path="/about" component={About}></Route>
  <Route path="/contact" component={Contact}></Route>
);

export default App;

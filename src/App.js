import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div >
  <Navigation />
  <Route path="/" exact component={Home} />
  <Route path="/about" exact component={About} />
  <Route path="/contact" exact component={Contact} />
  </div>
);

export default App;

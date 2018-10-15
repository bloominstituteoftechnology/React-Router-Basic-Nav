import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Route exact path='/' component={Home}/>
    <Route path='/about' component={About}/>
    <Route path='/contact' component={Contact}/>
    <Navigation />
  </div>
);

export default App;

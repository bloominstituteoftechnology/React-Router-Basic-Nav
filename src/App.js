import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Navigation />
    <Route exact path="/" compounent={Home}/>
    <Route  exact  path="/About" compounent={About}/>
    <Route path="/Contact" compounent={Contact}/>
  </div>
);

export default App;
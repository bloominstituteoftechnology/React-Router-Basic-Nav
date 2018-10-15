import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';


const App = () => (
  <div>
    <Navigation />
    <Route exact path="/" compoent={Home}/>
    <Route exact path="/about" compoent={About}/>
    <Route exact path="/contact" compoent={Contact}/>
  </div>
);

export default App;

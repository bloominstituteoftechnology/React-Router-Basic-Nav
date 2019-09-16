import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';
const App = () => (
  <div>
    <Route exact path="/" component={""}/>
    <Route path="/about" component={""}/>
    <Route path="/component" component={""}/>
    <Navigation />
  </div>
);

export default App;

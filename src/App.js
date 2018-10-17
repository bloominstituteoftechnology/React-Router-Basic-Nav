import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router';

const App = () => (
  <div>
    <Navigation />
    <Route path='/' exact component={Home}></Route>
    <Route path='/about' component={About}></Route>
    <Route path='/contact' component={Contact}></Route>
  </div>
);

export default App;

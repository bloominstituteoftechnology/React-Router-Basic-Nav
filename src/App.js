import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Navigation />
    <Route path='/' exact component={ Home } />
    <Route path='/contact' component={ Contact } />
    <Route path='/about' component={ About } />
  </div>
);

export default App;

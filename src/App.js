import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Route exact path = "/" component = {Home} />
    <Route exact path = "/About" component = {About} />
    <Route exact path = "/Contact" component = {Contact} />
    <Navigation />
  </div>
);

export default App;

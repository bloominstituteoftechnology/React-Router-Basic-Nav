import React from 'react';
import {Route} from 'react-router-dom';

import './App.css';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Navigation />
    <Route exact path="/" />
    <Route path="/about" />
    <Route path="/contact" />
  </div>
);

export default App;

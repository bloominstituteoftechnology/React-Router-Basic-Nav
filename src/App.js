import React from 'react';
import './App.css';
import {Route} from "react-router-dom"
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Navigation />
    <Route exact path="/" componenet={Home} />
    <Route path="/about" componenet={About} />
    <Route path="/contact" componenet={Contact} />
  </div>
);

export default App;

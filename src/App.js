import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Navigation from './components/Navigation';
import { Home, About, Contact} from './components';

const App = () => (
  <div>
    <Navigation /> 
    <Route path="/" exact component={Home} />
    <Route path="/about" exact component={About} />
    <Route path="/contact" exact component={Contact} />
  </div>
)

export default App;

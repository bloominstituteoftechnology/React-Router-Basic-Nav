import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import { Home, About, Contact} from './components';

const App = () => (
  <div>
    <Route exact path="/" />
    <Route path="/about" />
    <Route path="/contact" />
    <Navigation /> 
  </div>
)

export default App;

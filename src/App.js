import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
//import Navigation from './components/Navigation';
import {Route} from "react-router-dom";
const App = () => (
  <div>
    <Navigation />
    <Route exact path='/' component={Home}/>
    <Route exact path='/' component={About}/>
    <Route exact path='/' component={Contact}/>
  </div>
);

export default App;

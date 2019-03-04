import React from 'react';
import './App.css';
import { Home, About, Contact } from './components';
// import ReactDOM from "react-dom";
import Navigation from './components/Navigation';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Navigation />
    <Route exact path="/" component={Home}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/about" component={About}/>
  </div>
);



export default App;

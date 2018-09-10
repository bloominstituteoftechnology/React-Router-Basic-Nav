import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => (
  <div>
    <Navigation />
    <Router exact path="/" component={Home} />
    <Router path="/about" component={About} />
    <Router path="/contact" component={Contact} />
  </div>
);

export default App;

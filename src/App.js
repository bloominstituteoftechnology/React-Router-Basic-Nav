import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation, Friends } from './components';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

const App = () => (
  <div>
    <Navigation />
  
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/friends">Friends</Link>
    <Route exact path="/" component={Home}></Route>
    <Route path="/about" component={About}></Route>
    <Route path="/contact" component={Contact}></Route>
    <Route path="/friends" component={Friends}></Route>
  
  </div>
);

export default App;

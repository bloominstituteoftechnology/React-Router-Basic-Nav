import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'

import Home from './components/Home'; 
import Contact from './components/Contact'; 
import About from './components/About'; 
import Navigation from './components/Navigation'; 


const App = () => (
  <div>
      <Navigation />
      <Route path="/" exact component={Home} />
      <Route path="/about/" component={About} />
      <Route path="/contact/" component={Contact} />
  </div>
);

export default App;
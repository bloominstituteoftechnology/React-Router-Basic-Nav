import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import Bob from './components/Bob';
import { Route } from 'react-router-dom';



const App = () => (
  <div>
    <Navigation />
    <Route exact path="/" component={Home}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/about" component={About}/>
    <Route path="/fun" component={Bob}/>
  </div>
);

export default App;

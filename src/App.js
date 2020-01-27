import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import Bob from './components/Bob';
import Mandi from './components/Mandi';
import { Route } from 'react-router-dom';



const App = () => (
  <div>
    <Navigation />
    <Route exact path="/" component={Home}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/about" component={About}/>
    <Route path="/fun" component={Bob}/>
    <Route path="/Mandi" component={Mandi}/>
  </div>
);

export default App;

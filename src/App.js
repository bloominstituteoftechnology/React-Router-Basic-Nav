import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Navigation />
    <Route exact path="/" component={Home}      />
    <Route path="/about/" component={About}      />
    <Route path="/contact" component={Contact}  />
  </div>
);

export default App;

// 'exact' is the same as {true}. It is a named prop. 'Exact' is the exact path. Won't go past "home".
// <Switch> turns your routes from 'if statements' into if/else. Switch only matches one component. '/' Will not look further than the '/' for something '/about', etc. Must import Switch with Route from react-router-dom.
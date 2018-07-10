import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Navigation />
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </div>
);
// exact path on home is so that home isnt rendered at paths of other components
// path and components are props
// when url is requested at specific path then mount and render that component
// props off of each component in route is history, location and match
// params come off of match object for unique id
// home, about, contact are child components of route
export default App;

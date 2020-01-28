import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route, Switch } from 'react-router-dom';

const App = () => (
  <div>
    <Navigation />
    <Switch>
      <Route exact path="/" component={Home}>
        <Home />
      </Route>
      <Route exact path="/Contact" component={Contact}>
        <Contact />
      </Route>
      <Route exact path="/About" component={About}>
        <About />
      </Route>
    </Switch>
  </div>
);

export default App;

import React from 'react';
import './App.css';
// eslint-disable-next-line
import { Home, About, Contact, Navigation } from './components';
import { Route, Switch } from 'react-router-dom';

const App = () => (
  <div>
    <Navigation />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </div>
);

export default App;

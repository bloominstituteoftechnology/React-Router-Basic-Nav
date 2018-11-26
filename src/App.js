// Importing libraris
import React from 'react';
import { Route } from 'react-router-dom';

// Importing styles
import './App.css';

// Importing components
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Navigation />
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </div>
);

export default App;
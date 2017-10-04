import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { Home, About, Contact} from './components';
import { Route } from 'react-router-dom';

const App = () => (
  <div className="app">
    <Navigation />
    <Route path="/" exact  component={Home}    />
    <Route path="/about"   component={About}   />
    <Route path="/contact" component={Contact} />
  </div>
)

export default App;

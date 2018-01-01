import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { Home, About, Contact} from './components';
import {  BrowserRouter as Router, Route} from 'react-router-dom';


const App = () => (
  <Router>
  <div>
    <Route path="/" component={Home} exact/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
    <Navigation /> 
  </div>
  </Router>
)

export default App;

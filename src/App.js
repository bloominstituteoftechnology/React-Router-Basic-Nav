import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Home, About, Contact, Navigation } from './components';
import { Route, Switch, Link } from "react-router-dom";

import './App.css';



const App = () => (
  <Router>
    <Navigation />
    <Link to="/">Home{' '}</Link> 
     <Link to="/about">About{' '}</Link> 
     <Link to="/contact">Contact</Link>
     
     <Switch>
          <Route path="/" exact component={Home} />
         
          <Route path="/about/" component={About} />
          <Route path="/contact/" component={Contact} />
      
          
        </Switch>
  
  </Router>
);

export default App;

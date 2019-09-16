import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'; ;



const App = () => (
  <div>
   <Router>
    <Navigation />

    <Route exact path = "/home" component ={Home} />
    <Route path = "/about" component ={About} />
    <Route path = "/contact" component ={Contact} />
    </Router>
  </div> 
     
    


);

export default App;

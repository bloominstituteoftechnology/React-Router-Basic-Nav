import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Navigation />
    <Route path ="/" component ={()=> <div>Home</div>} />
    <Route path ="/About" component ={()=> <div>About </div>} />
    <Route path ="/Contact" component ={()=> <div> Contact</div>} />
  </div>
);

export default App;

//Navigation and Route in App are siblings

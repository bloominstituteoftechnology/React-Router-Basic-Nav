import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route, Link } from 'react-router-dom';



const App = () => (

  <div>
    <Navigation />
    
    <Route path="/" exact component={Home} />
    <Route path="/about" exact component={About} />
    <Route path="/contact" exact component={Contact} />
    {/* <div>
      Div is for testing nesting on route path and how its affected by it
    </div> */}
  </div>
  
);



export default App;

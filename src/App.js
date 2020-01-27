import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import {Link, Switch, Route} from 'react-router-dom';

const App = () => {
  return (
  <div>
    <Navigation />
    

<Switch>
<Route exact path='/' component={Home}/>


  <Route exact path='/about'>
    <About />
  </Route>

  <Route exact path='/contact'>
    <Contact/>
  </Route>
 </Switch>
 
 </div>
  );
 };
 

export default App;

import React from 'react';
import {Route} from "react-router-dom"
import './App.css';
import { Home, About, Contact, Navigation } from './components';



const App = () => (
  <div>
    <Navigation />
    <Route exact path={'/'} component={Home}/>
    <Route exact path={'/About'} component={About}/>
    <Route exact path={'/Contact'} component={Contact}/>
  </div>
);

export default App;

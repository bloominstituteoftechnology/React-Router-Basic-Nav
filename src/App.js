import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import {Route} from 'react-router-dom';

const App = () => (
  <div>
    <Navigation />
    {/* Create 3 <Route /> components and set the path equal to
        / , /about, /contact respectively
    */}
    <Route exact path="/" component={Home}/>
    <Route exact path="/" component={About}/>
    <Route exact path="/" component={Contact}/>
  </div>
);

export default App;

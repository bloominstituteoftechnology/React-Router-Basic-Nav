import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => (
  <div>
    <BrowserRouter>
    <Route exact path = "/"><Home /></Route>
    <Route path = "/about"><About /></Route>
    <Route path = "/contact"><Contact /></Route>
    {/* <Route exact path = "/" component = {Home}/>
    <Route path = "/about" component = {About}/>
    <Route path = "/contact" component = {Contact}/> */}
    <Navigation />
    </BrowserRouter>
  </div>
);

export default App;

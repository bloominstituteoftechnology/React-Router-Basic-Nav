import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Navigation />
  </div>
    <Route path ="/" exact component = {Home} />
    <Route path = "/about" component = {About} />
    <Route path = "/contact" component = {Contact} />

)

export default App;

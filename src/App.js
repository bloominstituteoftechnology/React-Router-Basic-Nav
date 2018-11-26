import React, {Component} from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import {Route} from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <div>
      <Navigation />
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact}  /> 
      </div>
    )
  }
};

export default App;

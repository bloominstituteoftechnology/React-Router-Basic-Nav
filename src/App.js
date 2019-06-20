import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { BrowserRouter as Route } from 'react-router-dom';

const App = () => (
  <div className="nav-item">
      <div>
        <
        Navigation />
      </div>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contac" component={Contact} />
        </div>
  </div>
);

export default App;

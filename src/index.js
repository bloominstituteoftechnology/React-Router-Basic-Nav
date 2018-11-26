// Importing libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Importing styles
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

// Importing components
import App from './App';

ReactDOM.render(
  <Router> 
    <App /> 
  </Router>, 
  document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router } from 'react-router-dom' //import` your BrowserRouter as Router inside your `index.js` file.

ReactDOM.render( // Wrap your `<App />` component that you're passing to `ReactDOM.render()
<Router> 
<App/> 
</Router>, document.getElementById('root'));

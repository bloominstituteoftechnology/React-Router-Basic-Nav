import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Import that allows for impementation of React Router
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

//Render renders our new Router component with the App component wrapped inside
ReactDOM.render(
    <Router>
        <App/>
    </Router>,
     document.getElementById('root')
);

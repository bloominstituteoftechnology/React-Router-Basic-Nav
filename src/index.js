import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

//import your BrowserRouter as Router inside your index.js file.
import { BrowserRouter as Router } from 'react-router-dom';

//Wrap your <App /> component that you're passing to ReactDOM.render() with your new Router component.
ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root')
);

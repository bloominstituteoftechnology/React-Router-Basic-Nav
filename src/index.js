import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';

const Router = BrowserRouter;

ReactDOM.render(
<Router>
<App />
</Router>, document.getElementById('root'));

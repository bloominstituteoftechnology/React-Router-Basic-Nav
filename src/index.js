import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { from } from 'rxjs';

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));

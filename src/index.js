import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

const rootElement = document.getElementById('root');
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, rootElement ); 

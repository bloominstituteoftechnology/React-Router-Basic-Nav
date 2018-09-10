import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router} from "react-router-dom";
import {ThemeProvider} from 'styled-components'


ReactDOM.render(
    
    <Router>
        <App />
    </Router>
, 
document.getElementById('root'));

const color = {
  mainColor: "#D9491D",
  sideColorLight1: '#F4F4F4',
  sideColorLight2: '#7F8489',
  sideColorDark1: '#3D3D3B',
  sideColorDark2: '#525F7F'
}

const theme = {
  navTheme: `
  color: ${color.sideColorLight1}
  background: ${color.mainColor}
  h1{
    color:${color.sideColorDark1}
  }

  border-bottom: 2px solid ${color.sideColorDark2}
  `
} 

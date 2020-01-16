import React from 'react';
import { Link } from 'react-router-dom';

import Home from "./Home";
import About from "./About";
import contact from "./Contact";

const Navigation = () => {
  return (

      <div className="App">
        <h1>React Router Mini</h1>
    
          <Link className="" to="/">Home</Link>
          <Link className="" to="/About">About</Link>
          <Link className="" to="/Contact">Contact</Link>
  
    </div>
  );
};

export default Navigation;

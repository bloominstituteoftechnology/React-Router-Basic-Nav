import React from 'react';
import {Link } from "react-router-dom";

const Navigation = () => {
  return (
    
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          
    <Link to="/"> Home</Link>     
        </div>
        <div>
          <Link to="/about/327">About</Link> 
        <div>
        <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;


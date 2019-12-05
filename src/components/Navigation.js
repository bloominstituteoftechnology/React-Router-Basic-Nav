import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
    <div className="App">
      <h1>React Router Mini</h1>
      <nav>
        <div className="linkDiv">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
       
      </div>
  </div>
  );
};

export default Navigation;

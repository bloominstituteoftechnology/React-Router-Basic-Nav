import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <nav className="App">
        <h1>React Router Mini</h1>
       <Link to="/">Home</Link>
       <Link to="/about">About</Link>
       <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Navigation;

import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link to="/" href="">Home</Link>
        </div>
        <div>
          <Link to="/About" href="">About</Link>
        </div>
        <div>
          <Link to="/Contact" href="">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

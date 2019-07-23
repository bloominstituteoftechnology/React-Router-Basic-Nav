import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <ul>
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/about/" >About</Link>
          </li>
          <li>
            <Link to="/contact/" >Contact</Link>
          </li>
        </ul>       
      </div>
    </div>
  );
};

export default Navigation;
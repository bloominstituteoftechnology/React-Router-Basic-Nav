import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <Link to='/'>
          <div>
            <a href="">Home</a>
          </div>
        </Link>
        <Link to='/about'>
          <div>
            <a href="">About</a>
          </div>
        </Link>
        <Link to='/contact'>
          <div>
            <a href="">Contact</a>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;

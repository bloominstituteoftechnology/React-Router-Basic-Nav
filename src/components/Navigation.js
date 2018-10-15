import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <Link to='/'>
          <a href="">Home</a>
        </Link>
        <Link to='/about'>
          <a href="">About</a>
        </Link>
        <Link to='/contact'>
          <a href="">Contact</a>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;

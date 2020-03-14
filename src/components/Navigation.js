import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <a href="/home">Home</a>
        </div>
        <div>
          <a href="/about">About</a>
        </div>
        <div>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

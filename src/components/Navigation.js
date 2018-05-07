import React from 'react';

import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link to="/">Home</Link>
          <a href=""></a>
        </div>
        <div>
          <Link to="/about">About</Link>
          <a href=""></a>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
          <a href=""></a>
        </div>
      </div>
    </div>
  );
};



export default Navigation;

import React from 'react';
import { div } from 'reactstrap';
import { Link } from 'react-router-dom';

const divigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div  className="link">
          <Link to="/"> Home </Link>
          
        </div>
        <div  className="link">
          <Link to="/about"> About </Link>
        </div>
        <div className="link">
          <Link  to="/contact"> Contact </Link>
        </div>
      </div>
    </div>
  );
};

export default divigation;
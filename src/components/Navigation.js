import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <Link to='/'><div color="secondary">Home</div></Link>
        <Link to='/about'><div color="secondary">About</div></Link>
        <Link to='/contact'><div color="secondary">Contact</div></Link>
      </div>
    </div>
  )
};

export default Navigation;


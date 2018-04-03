import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const linkStyles = {
  padding: '2rem',
}

const Navigation = () => {
  return (
    <div>
      <Nav className="App">
        <h1>React Router Mini</h1>
        <NavItem>
          <Link style={linkStyles} to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link style={linkStyles} to="/about">About</Link>
        </NavItem>
        <NavItem>
          <Link style={linkStyles} to="/contact">Contact</Link>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Navigation;
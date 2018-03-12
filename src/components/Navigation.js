import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <Nav className="App">
        <h1>React Router Mini</h1>
        <NavLink>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        </NavLink>
        <NavLink>
        <NavItem>  
          <Link to="/about">About</Link>
        </NavItem>
        </NavLink>
        <NavLink>
        <NavItem> 
          <Link to="/contact">Contact</Link>
        </NavItem>
        </NavLink>
      </Nav>
    </div>
  );
};

export default Navigation;
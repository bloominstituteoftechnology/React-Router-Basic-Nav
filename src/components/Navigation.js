import React from 'react';
import { Nav, NavItem, NavLink} from 'reactstrap';
import {  Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <Nav className="App">
        <h1>React Router Mini</h1>
        <NavItem>
          <NavLink><Link to="/">Home</Link></NavLink>
        </NavItem>
        <NavItem>
          <NavLink><Link to="/about">About</Link></NavLink>
        </NavItem>
        <NavItem>
          <NavLink><Link to="/contact">Contact</Link></NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Navigation;
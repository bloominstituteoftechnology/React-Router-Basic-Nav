import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <Nav className="App">
        <h1>React Router Mini</h1>
        <NavItem>
          <Link href = to Home />
        </NavItem>
        <NavItem>
          <Link href = to About />
        </NavItem>
        <NavItem>
          <Link href = to Contact />
        </NavItem>
      </Nav>
    </div>
  );
};

export default Navigation;

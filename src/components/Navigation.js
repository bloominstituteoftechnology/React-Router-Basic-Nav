import React from 'react';
import { Nav, NavItem} from 'reactstrap';
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <Nav className="App">
        <h1>React Router Mini</h1>
        <NavItem>
          <Link to="/" exact='true'  >Home&nbsp;</Link>
        </NavItem>
        <NavItem>
          <Link to="/about">About&nbsp;&nbsp;</Link>
        </NavItem>
        <NavItem>
          <Link to="/contact">Contact</Link>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Navigation;
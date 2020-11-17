import React from 'react';
import { Link } from 'react-router-dom'
import {
  Navbar,
  Nav,
  NavItem,
} from 'reactstrap';

const Header = (props) => {
  return (
    <div>
      <Navbar light expand="md" style={{backgroundColor:"rgb(0, 84, 159)  "}} className="navStyle">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/favourite">Favourite</Link>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
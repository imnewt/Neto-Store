import React, { useState } from "react";
import { Link } from "react-router-dom";


import Logo from "../images/logo.jpg";
import SearchIcon from "../images/search-icon.svg";
import CartIcon from "../images/cart-icon.svg";
import AccountIcon from "../images/account-icon.svg";
import { CartContext } from '../contexts/Cart';
import "./Header.css"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const Header = props => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div style={{backgroundColor: "#f8f9fa"}} className="fixed-top">
      <div className="container">
        <Navbar color="light" light expand="md">
          <NavbarBrand>
            <Link to="/">
              <img src={Logo} width={140} height={70}></img>
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto ml-5" navbar>
              <NavItem>
                <NavLink>
                  <Link className="header-link" to="/">HOME</Link>
                </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="ml-5">
                    <Link className="header-link" to="/books/all">SHOP</Link>
                  </NavLink>
                </NavItem>
                <NavItem className="ml-5">
                  <NavLink>
                    <Link className="header-link" to="/about">ABOUT</Link>
                  </NavLink>
                </NavItem>
                <NavItem className="ml-5">
                  <NavLink>
                    <Link className="header-link" to="/contact">CONTACT</Link>
                  </NavLink>
                </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/search">
                    <img src={SearchIcon} width={24} height={24} />
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem className="ml-4">
              <NavLink>
                  <CartContext.Consumer>
                    {({ cartItems }) => (
                      <Link to="/cart"><img src={CartIcon} width={24} height={24} /> ({cartItems.length})</Link>
                    )}
                  </CartContext.Consumer>
                </NavLink>
              </NavItem>
              <NavItem className="ml-4">
                <NavLink>
                  <Link to="/account">
                    <img src={AccountIcon} width={24} height={24} style={{fontWeight:500}} />
                  </Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;

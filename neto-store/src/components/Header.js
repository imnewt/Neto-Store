import React, { useState } from "react";
import { Link } from "react-router-dom";


import Logo from "../images/logo.jpg";
import SearchIcon from "../images/search-icon.svg";
import CartIcon from "../images/cart-icon.svg";
import AccountIcon from "../images/account-icon.svg";
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
    <div style={{backgroundColor: "#f8f9fa"}}>
      <div className="container">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/" className="ml-3">
            <img src={Logo} width={140} height={70}></img>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto ml-5" navbar>
            <NavItem>
                <NavLink>
                  <Link to="/">HOME</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="ml-4">
                  <Link to="/">SHOP</Link>
                </NavLink>
              </NavItem>
              <NavItem className="ml-4">
                <NavLink>
                  <Link to="/about">ABOUT</Link>
                </NavLink>
              </NavItem>
              <NavItem className="ml-4">
                <NavLink>
                  <Link to="/contact">CONTACT</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                {/* <NavLink>
                  <CartContext.Consumer>
                    {({ cartItems }) => (
                      <Link to="/products">Cart ({cartItems.length})</Link>
                    )}
                  </CartContext.Consumer>
                </NavLink> */}
              </NavItem>
            </Nav>
            <Nav className="ml-auto mr-3" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/search">
                    <img src={SearchIcon} width={24} height={24} />
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem className="ml-4">
                <NavLink>
                  <Link to="/cart">
                    <img src={CartIcon} width={24} height={24} />
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem className="ml-4">
                <NavLink>
                  <Link to="/account">
                    <img src={AccountIcon} width={24} height={24} style={{fontWeight:500}} />
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                {/* <NavLink>
                  <CartContext.Consumer>
                    {({ cartItems }) => (
                      <Link to="/products">Cart ({cartItems.length})</Link>
                    )}
                  </CartContext.Consumer>
                </NavLink> */}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;

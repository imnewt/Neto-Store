import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Logo from "../images/logo.jpg";
import SearchIcon from "../images/search-icon.svg";
import CartIcon from "../images/cart-icon.svg";
import AccountIcon from "../images/account-icon.svg";
import { CartContext } from '../contexts/Cart';
import { getFromStorage } from '../utils/storage';
import "./Header.css"
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Badge
} from "reactstrap";

const Header = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const _handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const _handleClose = () => {
    setAnchorEl(null);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    callGetFromStorage();
  })

  const callGetFromStorage = async () => {
    const tokenTamp = getFromStorage('tokenId');
    await fetch(`/api/account/verify?token=${tokenTamp}`)
      .then(res => res.json())
      .then(json => {
        if(json.success) {
          setError(json.message);
          setName(json.name);
        } else {
          setError(json.message);
        }
      })
    
  }

  return (
    <div style={{backgroundColor: "#f8f9fa"}} id="myHeader">
      <div className="container">
        <Navbar color="light" light expand="md">
          <NavbarBrand>
            <Link to="/">
              <img src={Logo} width={140} height={70} alt="error"/>
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
                    <img src={SearchIcon} width={24} height={24} alt="error"/>
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem className="ml-4">
                <NavLink className="cart-container">
                  <CartContext.Consumer>
                    {({ count }) => (
                      <Link to="/cart">
                        <img src={CartIcon} width={24} height={24} alt="error"/>
                        <Badge className="cart-badge" color="dark">{count}</Badge>
                      </Link>
                    )}
                  </CartContext.Consumer>
                </NavLink>
              </NavItem>
              <NavItem className="ml-4">
                <NavLink>
                  {
                    name ? <>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={_handleClick}>
                      {name}
                    </Button>
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={_handleClose}
                    >
                      <MenuItem onClick={_handleClose}>Profile</MenuItem>
                      <MenuItem onClick={_handleClose}>My account</MenuItem>
                      <MenuItem onClick={_handleClose}>Sign out</MenuItem>
                    </Menu></> : 
                    <Link to="/api/account/signin">
                      <img src={AccountIcon} width={24} height={24} style={{fontWeight:500}} alt="error"/>
                    </Link>
                  }
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

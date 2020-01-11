import React, { useState } from "react";
// import { Table, Button } from "reactstrap";
import { CartContext } from "../contexts/Cart";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
import './Cart.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  table: {
    minWidth: 700,
  },
}));

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

export default function Cart() {
  const classes = useStyles();
  
  return (
    <CartContext.Consumer>
      {
        ({ cartItems, countIncrease, removeFromCart, sum }) => (
          cartItems.length 
          ? <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Image</StyledTableCell>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Price</StyledTableCell>
                <StyledTableCell colSpan={2} align="center">Quantity</StyledTableCell>
                
              </TableRow>
            </TableHead>
              <TableBody>
                {
                  cartItems.map(value => (
                    <StyledTableRow key={value.name}>
                      <StyledTableCell align="center" component="th" scope="value">
                        <img
                          src={value.imageUrl}
                          alt="Book Image"
                          width="50"
                          height="70"
                        />
                      </StyledTableCell>

                      <StyledTableCell align="center" className="font-weight-500">
                        {value.name}
                      </StyledTableCell>

                      <StyledTableCell align="center">
                        {(Math.round(value.price * 10)/10)}
                      </StyledTableCell>

                      <StyledTableCell colSpan={2} align="center">
                        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                          <Button onClick={() => removeFromCart(value)}>-</Button>
                          <Button>{value.quantity}</Button>
                          <Button onClick={() => countIncrease(value)}>+</Button>
                        </ButtonGroup>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))
                }
                <StyledTableRow>
                  <StyledTableCell colSpan={3} align="center">
                    Total
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    ${sum}
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer> 
          : <div className="d-flex justify-content-center align-items-center text-center" style={{height: "50vh" }}>
              <p style={{fontSize: 20 }}>Your cart is empty now. Please add some books and return ^^</p>
            </div>
        )
      }
    </CartContext.Consumer>
  );
}
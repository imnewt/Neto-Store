import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import { CartContext } from "../contexts/Cart";

import './Cart.css';

export default class Cart extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {
          ({ cartItems, countIncrease, countDecrease, sum }) => (
            cartItems.length ? <Table>
              <thead>
                <tr>
                  <th style={{ textAlign: "center" }}>Image</th>
                  <th style={{ textAlign: "center" }}>Name</th>
                  <th style={{ textAlign: "center" }}>Quantity</th>
                  <th style={{ textAlign: "center" }}>Price</th>
                </tr>
              </thead>
              <tbody>
                {
                  cartItems.map(value => (
                    <tr>
                      <td>
                        <img
                          src={value.imageUrl}
                          alt="Book Image"
                          width="50"
                          height="70"
                        />
                      </td>
                      <td style={{ textAlign: "center" }} className="font-weight-500">{value.name}</td>
                      <td style={{ textAlign: "center" }}>
                        <Button outline color="info" className="mr-3" onClick={() => countDecrease(value)}>-</Button>
                        <span>{value.count}</span> 
                        <Button outline color="info" className="ml-3" onClick={() => countIncrease(value)}>+</Button>
                      </td>
                      <td style={{ textAlign: "center" }}>{(Math.round((value.count * value.price) * 10)/10)}</td>
                    </tr>
                  ))
                }
                <tr>
                  <th colSpan="3" style={{ textAlign: "center" }}>
                    Total
                  </th>
                  <th style={{ textAlign: "center" }}>${sum}</th>
                </tr>
              </tbody>
            </Table> : <div style={{ textAlign: "center" }}>Nothing here</div>
          )
        }
      </CartContext.Consumer>
    );
  }
}
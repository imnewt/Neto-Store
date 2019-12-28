import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import { CartContext } from "../contexts/Cart";

import './Cart.css';

export default class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <CartContext.Consumer>
            {({ cartItems, countIncrease, countDecrease }) =>
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
                  <td className="font-weight-500">{value.name}</td>
                  <td>
                    <Button outline color="info" className="mr-3" onClick={() => countDecrease(value)}>-</Button>
                     {value.count} 
                    <Button outline color="info" className="ml-3" onClick={() => countIncrease(value)}>+</Button>
                  </td>
                  <td>{(Math.round((value.count * value.price) * 10)/10)}</td>
                </tr>
              ))
            }
          </CartContext.Consumer>
          <tr>
            <th colSpan="3" style={{ textAlign: "center" }}>
              Total
            </th>
            <CartContext.Consumer>
              {item => <th>${item.sum}</th>}
            </CartContext.Consumer>
          </tr>
        </tbody>
      </Table>
    );
  }
}
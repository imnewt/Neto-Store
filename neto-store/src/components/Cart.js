import React, { Component } from "react";
import { Table } from "reactstrap";
import { CartContext } from "../contexts/Cart";
import './Cart.css';
class Cart extends Component {
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
                      alt="Error"
                      width="50"
                      height="70"
                    />
                  </td>
                  <td>
                    <button className='button_cart' onClick={() => countIncrease(value)}>+ </button>
                     {value.count} 
                    <button className='button_cart' onClick={() => countDecrease(value)}> -</button>
                  </td>
                  <td>{value.name}</td>
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

export default Cart;

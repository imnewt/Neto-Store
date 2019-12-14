import React, { Component } from "react";
import { Table } from "reactstrap";
import { CartContext } from "../contexts/Cart";

// export default function(props) {

//     return (
//         <Table>
//             <thead>
//                 <tr>
//                 <th>Image</th>
//                 <th>Name</th>
//                 <th>Amount</th>
//                 <th>Price</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <CartContext.Consumer>
//                 {({ cartItems, count, countIncrease, countDecrease }) =>
//                     cartItems.map((value) => (
//                     <tr>
//                         <td>
//                         <img
//                             src={value.imageUrl}
//                             alt="Error"
//                             width="50"
//                             height="70"
//                         />
//                         </td>
//                         <td><button onClick={() => countIncrease()}>+</button>{count}<button onClick={() => countDecrease()}>-</button></td>
//                         <td>{value.name}</td>
//                         <td>{count*value.price}</td>
//                     </tr>
//                     ))
//                 }
//                 </CartContext.Consumer>
//                 <tr>
//                 <th colSpan="3" style={{textAlign:"center"}}>Total</th>
//                 <CartContext.Consumer>
//                     {item => <th>${item.sum}</th>}
//                 </CartContext.Consumer>
//                 </tr>
//             </tbody>
//         </Table>
//     );
// }
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
          {({ cartItems, count, countIncrease, countDecrease }) =>
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
                  <td><button onClick={() => countIncrease()}>+</button>{count}<button onClick={() => countDecrease()}>-</button></td>
                  <td>{value.name}</td>
                  <td>{count * value.price}</td>
                </tr>
              ))
            }
          </CartContext.Consumer>
          <tr>
            <th colSpan="3" style={{textAlign:"center"}}>Total</th>
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
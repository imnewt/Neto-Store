import React, { Component } from "react";

export const CartContext = React.createContext();
export class CartProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: [],
      count: 1,
      sum: 0
    };

    this.addToCart = this.addToCart.bind(this);
    this.countIncrease = this.countIncrease.bind(this);
    this.countDecrease = this.countDecrease.bind(this);
  }

  countIncrease() {
    this.setState({
      count: this.state.count + 1
    })
  }

  countDecrease() {
    this.setState({
      count: this.state.count - 1
    })
  }

  addToCart(book) {
    //this.state.sum += parseFloat(book.price);
    let find = this.state.cartItems.find(item => item.name.toLowerCase() === book.name.toLowerCase());
    if(find === undefined){
      this.setState({
        cartItems: this.state.cartItems.concat(book),
        sum: this.state.sum += parseFloat(book.price)
      });
    }
    else {
      this.setState({
        count: this.state.count + 1
      })
    }
    
  }

  render() {
    return (
      <CartContext.Provider
        value={{
          cartItems: this.state.cartItems,
          addToCart: this.addToCart,
          countIncrease: this.countIncrease,
          countDecrease: this.countIncrease,
          count: this.state.count,
          sum: this.state.sum
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
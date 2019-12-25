import React, { Component } from "react";

export const CartContext = React.createContext();
export class CartProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: [],
      sum: 0
    };

    this.addToCart = this.addToCart.bind(this);
    this.countIncrease = this.countIncrease.bind(this);
    this.countDecrease = this.countDecrease.bind(this);
  }

  countIncrease(book) {
    this.setState({
      cartItems: this.state.cartItems.map(item => {
        if (item.name.toLowerCase() === book.name.toLowerCase()) {
          item.count = item.count + 1;
        }
        return item;
      }),
      sum: this.state.sum += parseFloat(book.price)
    });
  }

  countDecrease(book) {
    this.setState({
      cartItems: this.state.cartItems.map(item => {
        if (item.name.toLowerCase() === book.name.toLowerCase()) {
          item.count = item.count - 1;
        }
        return item;
      }),
      sum: this.state.sum -= parseFloat(book.price)
    });
  }

  addToCart(book) {
    let find = this.state.cartItems.find(
      item => item.name.toLowerCase() === book.name.toLowerCase()
    );
    if (find === undefined) {
      const bookWithCount = { ...book, count: 1 };
      this.setState({
        cartItems: [...this.state.cartItems, bookWithCount],
        sum: this.state.sum += parseFloat(book.price)
      });
    } else {
      this.setState({
        cartItems: this.state.cartItems.map(item => {
          if (item.name.toLowerCase() === book.name.toLowerCase()) {
            item.count += 1;
          }
          return item;
        }),
        sum: this.state.sum += parseFloat(find.price)
      });
    }
  }

  render() {
    return (
      <CartContext.Provider
        value={{
          cartItems: this.state.cartItems,
          addToCart: this.addToCart,
          countIncrease: this.countIncrease,
          countDecrease: this.countDecrease,
          sum: (Math.round(this.state.sum*10)/10)
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

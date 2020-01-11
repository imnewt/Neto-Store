import React, { Component } from "react";

export const CartContext = React.createContext();
export class CartProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: [],
      sum: 0,
      count: 0
    };

    this.addToCart = this.addToCart.bind(this);
    this.countIncrease = this.countIncrease.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  countIncrease(book) {
    this.setState({
      cartItems: this.state.cartItems.map(item => {
        if (item.name.toLowerCase() === book.name.toLowerCase()) {
          item.quantity = item.quantity + 1;
        }
        return item;
      }),
      sum: this.state.sum += parseFloat(book.price),
      count: this.state.count + 1
    });
  }

  removeFromCart(book){
    if(book.quantity >= 2) {
        this.setState({
            cartItems: this.state.cartItems.map(item => {
                if (item.name.toLowerCase() === book.name.toLowerCase()) {
                    item.quantity = item.quantity - 1;
                }
                return item;
            }),
            sum: this.state.sum -= parseFloat(book.price),
            count: this.state.count - 1
        });
    } else {
        const filt = this.state.cartItems.filter( item =>  item.name !== book.name )
        this.setState({
            cartItems: filt,
            count: this.state.count - 1,
            sum: this.state.sum -= parseFloat(book.price)
        })
    }
  }

  addToCart(book) {
    let find = this.state.cartItems.find(
        item => item.name.toLowerCase() === book.name.toLowerCase()
    );
    if(find === undefined) {
        const bookWithQuantity = { ...book, quantity: 1 };
        this.setState({
            cartItems: [...this.state.cartItems, bookWithQuantity],
            count: this.state.count + 1,
            sum: this.state.sum += parseFloat(book.price)
        });
    } else {
        this.countIncrease(book);
    }
}

  _handleGetStorage = async () => {
    const cart = await localStorage.getItem('cart');
    const sum = await localStorage.getItem('sum');
    const count = await localStorage.getItem('count');
    await this.setState({
      cartItems: JSON.parse(cart) || [],
      sum: JSON.parse(sum) || 0,
      count: JSON.parse(count) || 0
    })
  }

  componentDidMount() {
    this._handleGetStorage();
  }

  _handleSaveStorage = async () => {
    const { cartItems, sum, count } = this.state;
    await localStorage.setItem('cart', JSON.stringify(cartItems));
    await localStorage.setItem('sum', JSON.stringify(sum));
    await localStorage.setItem('count', JSON.stringify(count));
  }

  componentDidUpdate() {
    this._handleSaveStorage();
  }

  render() {
    return (
      <CartContext.Provider
        value={{
          cartItems: this.state.cartItems,
          addToCart: this.addToCart,
          countIncrease: this.countIncrease,
          removeFromCart: this.removeFromCart,
          count: this.state.count,
          sum: (Math.round(this.state.sum*10)/10)
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Cart from './components/Cart';
import Home from "./components/Home";
import Books from "./components/Books";
import Terms from "./components/Terms";
import Exchanges from "./components/Exchanges";
import Footer from "./components/Footer";
import Shipping from './components/Shipping';
import Policy from './components/Policy';
import StoreLocation from './components/StoreLocation';
import FAQs from './components/FAQs';
import OrderTracking from './components/OrderTracking';

import { CartProvider } from './contexts/Cart';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.onscroll = function() {myFunction()};
    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  }

  render() {
    return (
      <CartProvider>
        <Router>
          <div className="App">
            <Header/>
            <div className="content">
              <Route path="/" exact component={Home} />
              <Route path="/books/all" exact component={Books} />
              <Route path="/Cart" exact component={Cart} />
              <Route path="/terms-conditions" exact component={Terms} />
              <Route path="/returns-exchanges" exact component={Exchanges} />
              <Route path="/shipping-delivery" exact component={Shipping} />
              <Route path="/privacy-policy" exact component={Policy} />
              <Route path="/store-location" exact component={StoreLocation} />
              <Route path="/faqs" exact component={FAQs} />
              <Route path="/orders-tracking" exact component={OrderTracking} />
            </div>
            <Footer/>
          </div>
        </Router>
      </CartProvider>
    )
  }
}

export default App;

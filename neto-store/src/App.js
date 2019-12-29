import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Cart from './pages/Cart';
import Home from "./pages/Home";
import Books from "./pages/Books";
import Terms from "./pages/Terms";
import Exchanges from "./pages/Exchanges";
import Footer from "./components/Footer";
import Shipping from './pages/Shipping';
import Policy from './pages/Policy';
import StoreLocation from './pages/StoreLocation';
import FAQs from './pages/FAQs';
import OrderTracking from './pages/OrderTracking';

import { CartProvider } from './contexts/Cart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalId: 0,
      scrollStepInPx: "50",
      delayInMs: "10"
    }
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

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.state.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(
      this.scrollStep.bind(this),
      this.state.delayInMs
    );
    this.setState({ intervalId: intervalId });
  }

  componentWillUpdate() {
    this.scrollToTop();
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
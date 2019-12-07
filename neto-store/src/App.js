import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Books from "./components/Books";
import Terms from "./components/Terms";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route path="/" exact component={Home} />
          <Route path="/books/all" exact component={Books} />
          <Route path="/terms-conditions" exact component={Terms} />
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App;

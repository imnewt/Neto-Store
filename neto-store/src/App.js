import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import axios from "axios";

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";


function Books(){
  return (
    <h1>Books</h1>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    axios.get("/books").then(res => this.setState({books: res.data}));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route path="/" exact component={Home} />
          <Route path="/books/all" exact component={Books} />
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App;

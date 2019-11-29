import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import axios from "axios";

import Header from "./components/Header";
import Home from "./components/Home";

//import './App.css';


function Products(){
  return <h1>Products</h1>
}

function Books(){
  return (
    <h1>Books</h1>
  )
}

class App extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    axios.get("/books").then(res => this.setState({books: res.data}))
  }

  render() {
    const { books } = this.state;
    return (
      <Router>
        <div className="App">
          <Header></Header>
          {/* <h1>{this.state.greeting}</h1>
          {
            books.map(item => (
              <img src={item.imageUrl} width={200} height={300}></img>
            ))
          } */}
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/books/all" exact component={Books} />
        </div>
      </Router>
    )
  }
}

export default App;

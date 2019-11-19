import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";

function Home(){
  return <h1>Home</h1>
}

function Products(){
  return <h1>Products</h1>
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Route path="/" exact component={Home} />
        <Route path="/products" component={Products} />
      </div>
    </Router>
  );
}

export default App;

import React, { Component } from 'react';
import { Container, Row, Col, Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import axios from "axios";

import "../App.css"

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
        books: []
    }
  }
  
  componentDidMount() {
    axios.get("/books").then(res => this.setState({books: res.data}));
  }

  render() {
    const { books } = this.state;
    return (
      <Container>
          <Row>
              {
                  books.map(book => (
                      <Col sm="4" className="d-flex flex-column align-items-center pt-5">
                          <img src={book.imageUrl} classname="" width={250} height={350}/>
                          <div className="w-100 text-center pt-4">
                            <h5>{book.name}</h5>
                            <p className="font-weight-500">{book.author}</p>
                            <p>${book.price}</p>
                          </div>
                      </Col>
                  ))
              }
          </Row>
      </Container>
    )
  }
}

export default Books;

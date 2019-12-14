import React, { Component } from 'react';
import axios from "axios";
import {
  Spinner,
  Container,
  Row,
  Col
} from "reactstrap";
import { CartContext } from "../contexts/Cart";
import './Books.css';
import Star from '../images/star.svg';

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCompleted: true,
      books: []
    }
  }
  
  componentDidMount() {
    axios.get("/books").then(res => {
      setTimeout(() => {
        this.setState({
          isCompleted: false,
          books: res.data
        });
      }, 2000);
    });
  }

  render() {
    const { books, isCompleted } = this.state;
    return (
      <Container>
        {
          isCompleted && (
            <div className="spin">
              <Spinner size="xl" type="grow" color="primary" />
              <Spinner size="xl" type="grow" color="secondary" />
              <Spinner size="xl" type="grow" color="success" />
              <Spinner size="xl" type="grow" color="danger" />
            </div>
          )
        }
        <Row>
          {
            books.map(book => (
                <Col sm="4" className="pt-3">
                    <div className="card">
                        <div className="card__top">
                          <img class="card-img-top" src={book.imageUrl} width="100%" alt="image"/>
                        </div>
                        <div className='card__bottom'>
                          <h4 className="card__h4">{book.name}</h4>
                          <div>
                            <img src={Star} width={20} height={20} />
                            <img src={Star} width={20} height={20} />
                            <img src={Star} width={20} height={20} />
                            <img src={Star} width={20} height={20} />
                            <img src={Star} width={20} height={20} />
                          </div>
                          <div className="position-absolute w-100 d-flex justify-content-center top-50 elem-hover transition">
                              <CartContext.Consumer>
                                {({ addToCart }) => (
                                    <button className="cate-btn" onClick={() => addToCart(book)}>
                                    Add To Cart
                                    </button>
                                )}
                              </CartContext.Consumer>
                          </div>
                        </div>
                    </div>
                </Col>
            ))}
        </Row>
      </Container>
    );
  }
}

export default Books;

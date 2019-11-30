import React, { Component } from 'react';

import {
  Container,
  Row,
  Col
} from "reactstrap";

import Carousel from "./Carousel";
import CategoryBlock from "./CategoryBlock";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryImg: [
        "https://cdn.shopify.com/s/files/1/0265/8933/1530/files/Collection-1.png?v=1569218195",
        "https://cdn.shopify.com/s/files/1/0265/8933/1530/files/Collection-2.png?v=1569218207",
        "https://cdn.shopify.com/s/files/1/0265/8933/1530/files/Collection-3.png?v=1569218218"
      ]
    }
  }

  render() {
    const { categoryImg } = this.state;
    return (
      <div>
        <Carousel />
        <Container>
          <Row>
            {
              categoryImg.map(imgUrl => (
                <Col lg="4">
                  <CategoryBlock src={imgUrl} />
                </Col>
              ))
            }
            </Row>
         </Container>
      </div>
    )
  }
}

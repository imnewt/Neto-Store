import React, { Component } from 'react';

import {
  Container,
  Row,
  Col
} from "reactstrap";

import "../App.css";

import Carousel from "./Carousel";
import CategoryBlock from "./CategoryBlock";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryBlock: [
        {
          imgUrl: "https://cdn.shopify.com/s/files/1/0265/8933/1530/files/Collection-1.png?v=1569218195",
          link: "/books/category/history"
        },
        {
          imgUrl: "https://cdn.shopify.com/s/files/1/0265/8933/1530/files/Collection-2.png?v=1569218207",
          link: "/books/category/science"
        },
        {
          imgUrl: "https://cdn.shopify.com/s/files/1/0265/8933/1530/files/Collection-3.png?v=1569218218",
          link: "/books/category/design"
        }
      ]
    }
  }

  render() {
    const { categoryBlock } = this.state;
    return (
      <div>
        <Carousel/>
        <Container className="pt-5">
          <Row>
            {
              categoryBlock.map(item => (
                <Col lg="4">
                  <CategoryBlock imgUrl={item.imgUrl} link={item.link} />
                </Col>
              ))
            }
          </Row>
        </Container>
      </div>
    )
  }
}

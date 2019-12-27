import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

import Logo from "../images/logo.jpg";
import Address from "../images/address.svg";
import Phone from "../images/phone.svg";
import Email from "../images/email.svg";
import Twitter from "../images/twitter.svg";
import Insta from "../images/instagram.svg";
import Google from "../images/google.svg";
import LinkedIn from "../images/linkedin.svg";
import Pinterest from "../images/pinterest.svg";

import "../App.css";
import "./Footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactIcon: [
        {
          url: Address,
          content: "19 Crescent, Singapore"
        },
        {
          url: Phone,
          content: "+61 7 3077 9696"
        },
        {
          url: Email,
          content: "support@gmail.com"
        }
      ],
      time: ["Mon - Fri: 8AM - 10PM", "Sat: 9AM - 8PM", "Sun: Closed"],
      info: [
        {
          content: "Terms & Conditions",
          url: "/terms-conditions"
        },
        {
          content: "Returns & Exchanges",
          url: "/returns-exchanges"
        },
        {
          content: "Shipping & Delivery",
          url: "/shipping-delivery"
        },
        {
          content: "Privacy Policy",
          url: "/privacy-policy"
        }
      ],
      qlinks: [
        {
          content: "Store Location",
          url: "/store-location"
        },
        {
          content: "Orders Tracking",
          url: "/orders-tracking"
        },
        {
          content: "Guide",
          url: "/guide"
        },
        {
          content: "FAQs",
          url: "/faqs"
        }
      ],
      linkIcon: [
        {
          name: Twitter,
          url: "https://twitter.com/"
        },
        {
          name: Insta,
          url: "https://instagram.com/"
        },
        {
          name: Google,
          url: "https://google.com/"
        },
        {
          name: LinkedIn,
          url: "https://vn.linkedin.com"
        },
        {
          name: Pinterest,
          url: "https://pinterest.com/"
        }
      ],
      intervalId: 0,
      scrollStepInPx: "50",
      delayInMs: "10"
    };
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

  render() {
    const { contactIcon, time, info, qlinks, linkIcon } = this.state;
    return (
      <div className="mt-5" style={{ backgroundColor: "#f8f9fa" }}>
        <Container className="border-bottom pb-3">
          <Row>
            <div className="col-12 col-md-6 col-lg-3 pt-5 d-flex flex-column">
              <img src={Logo} width={140} height={70} />
              {contactIcon.map(item => (
                <div className="pt-3">
                  <img src={item.url} width={24} height={24} />
                  <p className="d-inline font-size-text pl-2">{item.content}</p>
                </div>
              ))}
            </div>
            <div className="col-12 col-md-6 col-lg-3 pt-5">
              <h4>BUSINESS HOURS</h4>
              <div>
                {time.map(item => (
                  <p className="pt-4 m-0 font-size-text">{item}</p>
                ))}
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 pt-5">
              <h4 className>INFORMATION</h4>
              <ul className="list-unstyled">
                {info.map(item => (
                  <li className="pt-4 font-size-text">
                    <Link
                      to={item.url}
                      onClick={() => {
                        this.scrollToTop();
                      }}
                      className="li-link hover-blue transition"
                    >
                      {item.content}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-3 pt-5">
              <h4 className>QUICK LINKS</h4>
              <ul className="list-unstyled">
                {qlinks.map(item => (
                  <li className="pt-4 font-size-text">
                    <Link
                      to={item.url}
                      onClick={() => {
                        this.scrollToTop();
                      }}
                      className="li-link hover-blue transition"
                    >
                      {item.content}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Row>
        </Container>
        <Container className="pt-3">
          <Row>
            <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-start font-size-text">
              <p>
                Copyright &#38; Copy{" "}
                <Link to="/" className="text-blue">
                  Susan
                </Link>{" "}
                All Rights Reserved.
              </p>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end pb-3">
              {linkIcon.map(item => (
                <a href={item.url} target="_blank" className="ml-4 mr-4">
                  <img
                    src={item.name}
                    width={18}
                    height={18}
                    className="hover-blue"
                  />
                </a>
              ))}
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;

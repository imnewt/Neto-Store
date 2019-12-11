import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

import "../App.css";
import "./OrderTracking.css"

export default class OrderTracking extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
            
        }
    }

    render() { 
        return  (
            <div>
                <div className="position-relative head-image">
                    <div className="position-absolute w-100 top-65 text-center">
                        <h4 className="text-white">ORDER TRACKING</h4>
                    </div>
                </div>

                <Container className="pt-5">
                    <p className="text-gray pt-3 font-size-text">To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
                    <Row>
                        <div className="col-12 col-lg-6">
                            <label for="order-id" className="text-gray pt-3 pb-2 font-size-text">Order ID</label>
                            <input  id="order-id" 
                                    type="text" 
                                    className="tracking-input d-block w-100"
                                    placeholder="Found in your order confirmation email."        
                            />
                        </div>
                        <div className="col-12 col-lg-6">
                            <label for="billing-email" className="text-gray pt-3 pb-2 font-size-text">Billing email</label>
                            <input  id="billing-email" 
                                    type="email" 
                                    className="tracking-input d-block w-100"
                                    placeholder="Email you use during checkout." 
                            />
                        </div>
                    </Row>
                    <div className="pt-4">
                        <button className="track-btn font-weight-500 transition" type="submit">Track</button>
                    </div>
                </Container>
            </div>
    )}
}
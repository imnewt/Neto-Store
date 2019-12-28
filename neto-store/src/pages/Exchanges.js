import React, { Component } from 'react';
import { Container } from 'reactstrap';

import HeadImage from "../components/HeadImage"

import "../App.css";

export default class Exchanges extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exchanges: [
                {   
                    heading: "RETURNS & EXCHANGES POLICY",
                    content: [ 
                        <p>We want you to be happy with your purchase and we apologize if it is not. For whatever reason that you are not satisfied, we would be most happy to provide exchanges and returns for all items purchased from us if the following conditions are met:</p>,
                        <ul>
                            <li>All items must be in their original packaging with product tags intact</li>
                            <li>All items must be unused and in its original condition</li>
                            <li>Originals receipts would need to be included</li>
                            <li>All items would need to be purchased originally from Singapore</li>
                        </ul>,
                        <p>If non of the above conditions are met, we regret to inform that we are unable to process any claims for exchanges or refund regardless that the items have been mailed back to us.</p>,
                        <p><i className="text-dark font-size-text" style={{fontFamily: "gupter", fontWeight: 600}}>Sales item(s) are non-exchangeable nor returnable either in our retail boutique or via our online portal.</i></p>
                    ]
                },
                {   
                    heading: "1. VALIDITY FOR EXCHANGES & RETURNS",
                    content: [
                        <p>All exchanges and returns would need to be raised within 10 days of the invoice date for Singapore orders, and 20 days for overseas orders. For local deliveries, there is an option to exchange at any of our boutiques within Singapore or through our online portal at <a className="info-link hover-blue transition" href="http://www.company.com/">www.company.com</a>. All requests for returns however, would need to be strictly made online at <a className="info-link hover-blue transition" href="http://www.company.com/">www.company.com</a> for both local and overseas deliveries.</p>,
                    ]
                },
                {   
                    heading: "2. EXCHANGES AT OUR BOUTIQUES",
                    content: [ 
                        <p>2.1 You will need to bring along your original invoice together with the item(s) in its original condition and packaging to any of our boutiques.</p>,
                        <p>2.2 You will be entitled to an exchange of any item(s) in the boutique immediately after evaluation by our retail associates that it is valid.</p>,
                        <p>2.3 If the value of the exchange item(s) is higher than the original item(s), you will be required to top up the difference in cash.</p>,
                        <p>2.4 There will be no refund if the value of the exchange item(s) is lower than the original item(s).</p>,
                        <p>2.5 No other forms of exchanges (such as boutique cash vouchers or online store credit) will be given at our boutiques.</p>
                    ]
                },
                {   
                    heading: "3. EXCHANGES & RETURNS ONLINE",
                    content: [
                        <p>3.1 You will need to include your original invoice together with the item(s) in its original condition and packaging.</p>,
                        <p>3.2 Kindly print and fill up the Exchange/Return Request Form <a className="info-link hover-blue transition" href="https://www.jotform.com/">here</a> and follow the steps indicated in the form for your exchange.</p>,
                        <p>3.3 Mail us your parcel via a traceable mode of postage.</p>,
                        <p>3.4 Wait for our email confirmation and you will be notified once your online Store Credit Voucher is ready.  Generally, the processing period is 5 working days upon receipt of your parcel.</p>,
                        <p>3.5 All requests for returns will be refunded via online Store Credit Vouchers only. Your online Store Credit Voucher is valid for 30 days and can be used for your next purchase online. It is strictly non refundable, non extendable, non exchangeable for cash and non exchangeable for boutique vouchers. The online Store Credit Voucher is applicable online only and cannot be used in our Retail boutiques.</p>,
                        <p>3.6 Online Store Credit Vouchers are to be used in a singular transaction and any excess amount not utilized, would not be refunded.</p>,
                        <p>3.7 Online Store Credit Vouchers given will be at the buying price of the product as stated in the original invoice. No refunds will be given for delivery charges incurred in the original, returned and onward shipping charges of exchanged items.</p>,
                        <p>3.8 However, if any of the products received is deemed defective or a wrong shipment, BeetleBug.com will bear the cost of shipping the item(s) back to you. Please note that all exchanges are subjected to stock availability and whilst we endeavour to ship a replacement item(s) back to you, we reserve the right to do an exchange by way of an item(s) of a similar value or providing online store credits or any other methods at the discretion of BeetleBug.com.</p>,
                        <p>3.9 No refunds will be given for taxes, duties, tariffs and excise charges levied for overseas orders either for refunds or exchanged items.</p>,
                        <p>3.10 All returns and exchanges made via our online portal at <a className="info-link hover-blue transition" href="http://www.company.com/">www.company.com</a> would need to be shipped to:</p>,
                        <p>The Company Pte Ltd</p>,
                        <p>Changi South Lane</p>,
                        <p>#03-01/03 NanWahBuilding</p>,
                        <p>Singapore</p>,
                        <p>Tel: +65 6214 1490</p>
                    ]
                },
                {   
                    heading: "4. OTHER TERMS & CONDITIONS",
                    content: [
                        <p>4.1 All items that are returned and exchanged, can only be made once.</p>,
                        <p>4.2 We reserve the right and full discretion to disqualify you from enjoying free returns if the subsequent item(s) for return or exchange are of the same item(s) as a previous order.</p>,
                        <p>4.3 Our returns and exchanges policy does not cover damage resulting from unique, accidental, or random damage that is the result of use by you or wear and tear of a product.</p>,
                        <p>4.4 BeetleBug makes no warranty in respect of any product, express or implied, including any implied warranties of merchantability, quality, compliance with description and fitness for a particular purpose.</p>,
                        <p>4.5 Such returns are at all times governed by the provisions of the Consumer Protection (Fair Trading) Act of Singapore.</p>,
                        <p>4.6 All decisions made by BeetleBug.com is final.</p>
                    ]
                },
                {   
                    heading: "5. REPAIR POLICY",
                    content: [
                        <p>We offer repair services for all our products. Kindly visit us at any of our boutiques in Singapore for more information or contact us at <a className="info-link hover-blue transition" href="mailto:marketing@company.com">marketing@company.com</a></p>
                    ]
                }
            ]
        }
    }

    

    render() { 
        const { exchanges } = this.state;
        return  (
            <div>
                <HeadImage title="RETURNS &#38; EXCHANGES"/>
                <Container className="pt-5">
                    {
                        exchanges.map(item => (
                            <div className="pt-2">
                                <h3>{item.heading}</h3>
                                {
                                    Object.values(item.content).map(item => (
                                        <div className="text-gray pt-2 font-size-text">{item}</div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </Container>
            </div>
    )}
}
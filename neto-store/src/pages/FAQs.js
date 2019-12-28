import React, { Component } from 'react';
import { Container } from 'reactstrap';

import HeadImage from "../components/HeadImage"

import "../App.css";

export default class FAQS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            faqs: [
                {   
                    part: "1. ORDERING",
                    questionList: [
                        {
                            question: <p>1.1 Do I need to open an account in order to shop with you?</p>,
                            answer: <p>No, you don’t need to. You can make purchases and check out as a guest everytime. However, by setting up an account with us, it will allow you to order without having to enter your details every time you shop with us. You can sign up right now, or you can first start shopping and create your account before you check out at the shopping cart page.</p>
                        },
                        {
                            question: <p>1.2 How do I create an account?</p>,
                            answer: <p>Please click on “Login/Register” followed by ‘Create An Account’ and fill in your personal particulars.</p>
                        },
                        {
                            question: <p>1.3 How do I order?</p>,
                            answer: <p>Shop for the items you want and add it to your shopping cart. When you have finished, you can proceed to your shopping cart and check out. Check and ensure that all information is correct before confirming your purchases and payment.</p>
                        },
                        {
                            question: <p>1.4 I have problems adding items to my shopping cart</p>,
                            answer: <p>You will be able to add the items as long as it is available. There could be an instance where the item is in someone else’s shopping cart hence the status of the items is reflected as “Temporarily Unavailable”.</p>
                        },
                        {
                            question: <p>1.5 How do I pay for my orders?</p>,
                            answer: <p>We accept payments via Paypal and all major credit and debit cards such as Mastercard, VISA and American Express.</p>
                        },
                        {
                            question: <p>1.6 Can I amend and cancel my order?</p>,
                            answer: <p>Unfortunately we are unable to cancel an order once it has been placed. This will allow us to pack your orders efficiently and to minimize errors. It is advisable to check your order before placing it.</p>
                        },
                        {
                            question: <p>1.7 I have a discount code, how can I use it?</p>,
                            answer: <p>Key in the voucher code at the field “Voucher Code” and click “Add” in your Shopping Cart page before proceeding to check out. Please note that we are unable to manually apply the voucher code to your order if you have missed keying it during check out. Kindly ensure that all information is correct before confirming your purchase.</p>
                        },
                        {
                            question: <p>1.8 How will I know if my order is confirmed?</p>,
                            answer: <p>After you have placed your order, you will receive an acknowledgement e-mail from us to confirm that your orders have been received. However, do note that orders will only be shipped when your credit card payment has been approved and billing and delivery address is verified. Alternatively, you may check the status of your order in “My Account” if you are a registered user.</p>
                        },
                    ]
                },
                {   
                    part: "2. SHIPPING & DELIVERY",
                    questionList: [
                        {
                            question: <p>2.1 When will my order be processed?</p>,
                            answer: <p>All orders will be processed within 2 working days, excluding weekends and public holidays. Time stated is based on Singapore Time (UTC/GMT +8 hours).</p>
                        },
                        {
                            question: <p>2.2 How long will it take for me to receive my order?</p>,
                            answer: <p>The Standard courier delivery time frame is approximately 5 working days and the Express courier is approximately 3 working days from the time of placing your order. This is applicable only to all Singapore deliveries. For all international deliveries, the time taken is dependent on our logistics partners and their affiliates.</p>
                        },
                        {
                            question: <p>2.3 How can I track my delivery?</p>,
                            answer: <p>Once the order has been dispatched, an email confirmation will be sent to you with the tracking number. You may check and track the delivery status of your orders with our local logistics partner, with your 6-digit Order Number for all Singapore deliveries.</p>
                        },
                        {
                            question: <p>2.4 What are the shipping charges like?</p>,
                            answer: <p>Shipping is FREE for all Singapore deliveries via Standard courier. For international deliveries, you may select your item and proceed to the check out page as charges are based on weight and volume. Upon entering your delivery details, we will auto calculate the delivery charges based on your given address without the need for payment or registration.</p>
                        },
                        {
                            question: <p>2.5 Can I change my shipping address after my order has been confirmed?</p>,
                            answer: <p>Unfortunately, we are unable to redirect orders once your order is confirmed. Therefore, please ensure you provide the correct shipping address.</p>
                        },
                        {
                            question: <p>2.6 There is a missing item in my order, what should I do?</p>,
                            answer: <p>We apologize for sending you an incomplete order. Please contact our Customer Care Team at <a className="info-link hover-blue transition" href="mailto:marketing@company.com">marketing@company.com</a> and we will get back to you as soon as we can.</p>
                        },
                        {
                            question: <p>2.7 I’ve received a defective item, what should I do?</p>,
                            answer: <p>We apologize if you had received a defective item from us. Please contact our Customer Care Team at <a className="info-link hover-blue transition" href="mailto:marketing@company.com">marketing@company.com</a> with a snapshot of the product and we will get back to you as soon as we can.</p>
                        },
                        {
                            question: <p>2.8 I’ve received an incorrect item, what should I do?</p>,
                            answer: <p>We apologize for sending you the wrong item. Please contact our Customer Care Team at <a className="info-link hover-blue transition" href="mailto:marketing@company.com">marketing@company.com</a> and we will get back to you as soon as we can.</p>
                        },
                        {
                            question: <p>2.9 I’ve purchased the wrong size or color</p>,
                            answer: <p>We do not provide exchanges for size or color. We do however, accept returns for products purchased from us. You can refer to our Returns &#38; Exchanges policy and its procedures.</p>
                        },
                        {
                            question: <p>2.10 I have not received my parcel, what should I do?</p>,
                            answer: <p>Kindly drop an email to our Customer Care Team at <a className="info-link hover-blue transition" href="mailto:marketing@company.com">marketing@company.com</a> if you have not received your parcel after 10 working days and we will assist you accordingly.</p>
                        },
                        {
                            question: <p>2.11 Will there be an additional charge for redelivery?</p>,
                            answer: <p>There are no additional charges for redelivery up to two times. It is chargeable on the third attempt onwards.</p>
                        },
                        {
                            question: <p>2.12 I have yet to receive my parcel within the stipulated time frame. Whom can I contact?</p>,
                            answer: <p>You may check the status of your parcel via “Track your order” at to find out why it might have been delayed. Alternatively, you may drop us an email at <a className="info-link hover-blue transition" href="mailto:marketing@company.com">marketing@company.com</a> and we will assist you further.</p>
                        },
                    ]
                }
            ]
        }
    }

    

    render() { 
        const { faqs } = this.state;
        return  (
            <div>
                <HeadImage title="FAQs"/>
                <Container className="pt-5">
                    {
                        faqs.map(item => (
                            <div className="pt-4">
                                <h3>{item.part}</h3>
                                {
                                    Object.values(item.questionList).map(item => (
                                        <div className="text-gray pt-3 font-size-text">
                                            <h4 className="text-dark">{item.question}</h4>
                                            <div>{item.answer}</div>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </Container>
            </div>
    )}
}
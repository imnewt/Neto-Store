import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import './Carousel-animations.css';
import '../App.css';

import NewtImg from "../images/newt.jpg";
import KibutoImg from "../images/kibuto.png";
import JonImg from "../images/jon.jpeg";

class Carousel extends Component {
    state = {
        content: [
        {
            title: 'GREAT COLLECTION OF BOOKS',
            description:
            'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
            button: 'Shop Now',
            image: 'https://cdn.shopify.com/s/files/1/0265/8933/1530/files/Home-2-Slider-1.jpg?v=1569215594',
            user: 'Newt',
            userProfile: NewtImg
        },
        {
            title: 'GOOD PRICE',
            description:
            'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
            button: 'Shop Now',
            image: 'https://cdn.shopify.com/s/files/1/0265/8933/1530/files/Home-2-Slider-3.jpg?v=1569215841',
            user: 'Kibuto',
            userProfile: KibutoImg
        },
        {
            title: 'VARIETY PAYMENT METHOD',
            description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
            button: 'Shop Now',
            image: 'https://cdn.shopify.com/s/files/1/0265/8933/1530/files/Home-2-Slider-2.png?v=1569062675',
            user: 'Jon Snow',
            userProfile: JonImg
        }
        ]
    }

    render() {
        const { content } = this.state;
        return (
            <Slider className="slider-wrapper" autoplay={2500} disabled={true}>
                {content.map((item, index) => (
                    <div
                        key={index}
                        className="slider-content"
                        style={{ background: `url('${item.image}') no-repeat center center` }}
                    >
                        <div className="inner">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <Link to="/books/all">
                                <button className="crs-btn">{item.button}</button>
                            </Link>
                        </div>
                        <section>
                            <img src={item.userProfile} alt={item.user} />
                            <span>
                            Created by <strong>{item.user}</strong>
                            </span>
                        </section>
                    </div>
                ))}
            </Slider>
        )
    }
}

export default Carousel;

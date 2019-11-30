import React from 'react';

// import {
//     Button
// } from "reactstrap";

import "./CategoryBlock.css";
import "../App.css";

export default function(props) {
    const { src } = props 
    return (
        <div className="position-relative">
            <img src={src} width="100%"/>
            <div className="position-absolute w-100 d-flex justify-content-center top-50">
                {/* <Button>Explore</Button> */}
                <button className="cate-btn">Explore</button>
            </div>
        </div>

    )
}
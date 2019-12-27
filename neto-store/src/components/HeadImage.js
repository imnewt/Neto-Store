import React from 'react';

import "../App.css";

export default function HeadImage(props) {
    return  (
        <div className="position-relative head-image d-flex align-items-center">
            <div className="position-absolute w-100 text-center">
                <h4 style={{color: "#000"}}>{props.title}</h4>
            </div>
        </div>
    )
}
import React from 'react';
import { Link } from "react-router-dom";

import "./CategoryBlock.css";
import "../App.css";

export default function(props) {
    const { imgUrl, link } = props;
    return (
        <div className="pt-4">
            <div className="position-relative ctn-hover transition">
                <Link to={link}>
                    <img src={imgUrl} width="100%" alt="error"/>
                    <div className="position-absolute w-100 d-flex justify-content-center top-50 elem-hover transition">
                        <button className="cate-btn">Explore</button>
                    </div>
                </Link>
            </div>
        </div>
    )
}
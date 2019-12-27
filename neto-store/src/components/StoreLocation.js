import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

import HeadImage from "./HeadImage"

import "../App.css";

export default class StoreLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            storeLocation: [
                {   
                    nation: "BULGARIA",
                    stores: [
                        {
                            name: "Mall Varna",
                            address: "186 Vladislav Blvd.2nd floor, store No.18 Varna",
                            tel: "+359-893 695881"     
                        },
                        {
                            name: "Central pedestrian area",
                            address: "23 Knyaz Boris I Blvd Varna 9000",
                            tel: "+359-893 695882"     
                        }
                    ]
                },
                {   
                    nation: "DUBAI",
                    stores: [
                        {
                            name: "Mall of the Emirates",
                            address: "4th Interchange, Zayed Road 1st Level",
                            tel: "+971-4 341 3666"     
                        },
                        {
                            name: "Mercato",
                            address: "Jumeirah Beach Rd 1st Level",
                            tel: "+971-4 344 0015"     
                        },
                        {
                            name: "Deira City Centre",
                            address: "8th Street Deira 1st Level",
                            tel: "+971-4 295 0790"     
                        },
                        {
                            name: "Seminyak",
                            address: "Jl. Raya Seminyak No.9, Bali 80361",
                            tel: "+62-361 733462"     
                        }
                    ]
                },
                {   
                    nation: "INDONESIA",
                    stores: [
                        {
                            name: "Central Park",
                            address: "UG Floor Unit-123A, Jl. Jakarta Barat 11470",
                            tel: "+62-21 29200095"     
                        },
                        {
                            name: "Gandaria City",
                            address: "UG Floor Unit 61, Jl. Jakarta Selatan 12240",
                            tel: "+62-21 29007806"     
                        },
                        {
                            name: "Pondok Indah Mall 2",
                            address: "1st Floor #127, Jl. Jakarta Selatan 12310",
                            tel: "+62-21 75920987"     
                        },
                        {
                            name: "Galaxy Mall",
                            address: "1st Floor, Unit 125-126, Jl. Surabaya 60115",
                            tel: "+62-31 5937282"     
                        }
                    ]
                }
            ]
        }
    }

    render() { 
        const { storeLocation } = this.state;
        return  (
            <div>
                <HeadImage title="STORE LOCATION"/>
                <Container className="pt-5">
                    {
                        storeLocation.map(item => (
                            <div className="pt-4">
                                <h3>{item.nation}</h3>
                                <Row>
                                {
                                    Object.values(item.stores).map(item => (
                                        <div className="col-12 col-lg-6 text-gray pt-3 font-size-text">
                                            <h4 className="text-dark pb-2">{item.name}</h4>
                                            <p>{item.address}</p>
                                            <p>Tel: {item.tel}</p>    
                                        </div>
                                    ))
                                }
                                </Row>
                            </div>
                        ))
                    }
                </Container>
            </div>
        )
    }
}
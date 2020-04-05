import React, { Component } from 'react'
import Title from './Title'
import { FaHiking,FaCocktail,FaShuttleVan,FaBeer } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaHiking />,
                servicetitle:'Hiking',
                info:'Enjoy endless hiking ate our resort.We will deliever you the best hiking experience there'
            },
            {
                icon:<FaShuttleVan />,
                servicetitle:'ShuttleVan',
                info:'Our Shuttle van service will provide you comfrtable journey from our resort to your home'
            },
            {
                icon:<FaCocktail />,
                servicetitle:'Hiking',
                info:'Enjoy endless hiking ate our resort.We will deliever you the best hiking experience there'
            },
            {
                icon:<FaBeer />,
                servicetitle:'Beer',
                info:'Enjoy endless hiking ate our resort.We will deliever you the best hiking experience there'
            }
        ]
    }
    render() {
        return (
            <section className="section-services container-fluid">
                
                <Title title="Services" />
                <div className="row card-style">
                {
                    this.state.services.map((item,index)=>(
                        <div className="card col-lg-3 col=sm-12 text-wh bg-secondary " key={index}>
                            <div className="card-header ">

                            <h1>{item.servicetitle}</h1>
                            </div>
                            <span>{item.icon}</span>
                            <p>{item.info}</p>
                        

                        </div>
                    ))
                }
                </div>
                </section>

            
        )
    }
}

import React, { Component } from 'react'
import {RoomContext} from '../Context'
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './Title'
import Room from './Room'
//u will always have to use the static keyword to define the type of the context that your class imports..
export default class FeaturesRooms extends Component {
    static contextType=RoomContext;
    render() {
        const {FeaturedRooms}=this.context;
        
        
        return (
            <div>
                <Title title="Featured Rooms"/>
                
                  
                          <div className="row">
                           { 
                                
                                 FeaturedRooms.map(featuredrooms =>(
                                     <div className="col-lg-4 col-xs-10" key={featuredrooms.id}>
                                     <Room key={featuredrooms.id} roomInfo={featuredrooms} />
                                     </div>
                                  ))
                            }
                            </div>
            </div>
        )
    }
}

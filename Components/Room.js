import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import {Link } from 'react-router-dom'
import propType from 'prop-types'


function Room({roomInfo}) {
    const {name,slug,images,price}=roomInfo;
    const BadgeStyle={
            position:'absolute',
            backgroundColor:'rgba(0,0,0,0.5)',
            width:'50px',
            height:'40px',
            lineHeight:'1.5',
            fontSize:'10px',
            fontStyle:'bold',
            borderRadius:'0px 0px 10px 0px',
            color:'wheat'
            


    }
    return (
        <section>
            
            <div className="card card-featured">
                <img src={images[0]} alt=""  className="cards-images"/>
                <div style={BadgeStyle}>
                   start from ${price}
                </div> 
                
                <div className="card-footer" style={{textAlign:'center',backgroundColor:'grey'}}>
                   
                   <Link to={`/rooms:${slug}`}>
                       <button className="btn btn-secondary">
                           {name}
                       </button>
                   </Link>
                </div>
             </div> 
        
        </section>
    );
}
Room.propType={
    roomInfo:propType.shape({
        name:propType.string.isRequired,
        price:propType.number.isRequired,
        slug:propType.string.isRequired,
        images:propType.arrayOf(propType.string).isRequired


    })

}

export default Room;
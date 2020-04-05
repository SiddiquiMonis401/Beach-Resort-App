import React, { Component } from 'react'
import Badge from '../Components/Badge'
import {RoomContext} from '../Context'
import Banner from '../Components/Banner'
import Title from '../Components/Title'
export default class SingleRoom extends Component {
    static contextType=RoomContext;
    constructor(props){
        super(props);
        this.state={
            slug:this.props.match.params.slug
        }
    }

    render() {
        const {getRoom}=this.context;
        const rooms=getRoom(this.state.slug.slice(1,this.state.slug.length));
        const {images,name,type,price,size,capacity,pets,breakfast,featured,description,extras}=rooms;       
        const [firstImage,...remainImage]=images;
        if(rooms){
        return (
            <>
            {rooms &&
            <Badge image={firstImage}>
                <Banner title={name} subtitle={`Check out more about${name}`}
                tolink='/' linktitle="Return to home">
                </Banner>

            </Badge>}
            <section className="single-room-container">
                
            
                {
                    remainImage.map((items,index)=>{
                        return(
                            
                                                          
                              <img className="card images-card" key={index} src={items} alt={name} />
                              
                            
                            
                        )
                    })
                } 
                
                </section>

            <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6" >
                 <Title title="Description" />
                 <p>
                     {description}
                 </p>
                 </div>
                 <div className="col-lg-6">
                     <Title title="Information" />
                     <h6>
                         {`Size:${size}SQRFT`}
                     </h6>
                     <h6>{`price:${price}$`}</h6>
                     <h6>{pets && `pets allowed`}</h6>
                     <h6>{capacity>1?`${capacity} people allowed`:`${capacity}person allowed`}</h6>
                 </div>

                </div>    
            </div>
           <footer>
               <Title title="extras" />
               
               { 
                   extras.map((item,index)=>{
                       return <ul key={index}>{item}</ul> 
                   })
                   
               }  
               
               
           </footer>
            
             

                
                
                

            </>)
        }
        else{
            return(
                <h1>wrong creds</h1>
            )
        }
        
    }
}

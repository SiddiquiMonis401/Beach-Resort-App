import React,{useContext} from 'react';
import { RoomContext} from '../Context';
import Title from './Title'
import '../App.css'
function RoomFilter(props) {
    const context=useContext(RoomContext);
    const {capacity,rooms,breakfast,maxPrice,type,pets,handleChange,price}=context;
    //get unique
    const getUnique=(items,value)=>{
        return [...new Set(items.map(item=>item[value]))];
    }
    //Setting up the options for the type 
    let types=getUnique(rooms,'type');
    types=['all',...types];
    const typeArray=types.map((item,index)=>{
        return(
            <option value={item} key={index} >{item}</option>
        )
    })
    //setting up the options for the capacity
    const capacities=getUnique(rooms,'capacity');
    const capacityArray=capacities.map(items=>{
        return(
            <option value={items}>
                {items}
            </option>
        )
    })    
    return (
        <div className="room-filter">
        <Title title="Rooms Selection" />
        <form className="form-group">
            <div className="type-selection">
            <label>Type:</label>
            <select  name="type" value={type} onChange={handleChange}  >
                
             {typeArray}

            </select>
            </div>
            <div className="capacity-selection">
            <label>Guest:</label>
            <select name="capacity" value={capacity} onChange={handleChange} > 
                {capacityArray}

            </select>
            </div>
            <div className="check-box1">
            <input type="checkbox" name="pets" value={pets} onChange={handleChange}/>Pets <br/>
            </div>
            
            <div className="check-box2">
            <input type="checkbox" name="breakfast" value={breakfast    } onChange={handleChange}/>breakfast <br/>
            </div>
            <div className="price-input">
                <label>Rooms Price ${price}</label>
                <input type="range" max={maxPrice} min={0} value={price} name="price" onChange={handleChange}/>

            </div>
            
        </form>    
        </div>
    );
}

export default RoomFilter;
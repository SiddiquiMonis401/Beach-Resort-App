import React from 'react';
import Room from './Room'
function RoomList({SortedRooms}) {
   
   
    console.log(SortedRooms)
        return(
            
        <>
        <div className="row">
        { SortedRooms.length!==0 &&
         
            SortedRooms.map((item,index)=>(
                <div key={index} className="col-lg-4 col-lg-offset-1  col-md-6">
                <Room roomInfo={item} key={index} />
                </div>
            ))   
        }
        </div>
        <div>
            {SortedRooms.length===0&&<h1>No rooms</h1>}
        </div>
        </>
        )
        
       
    
    
}

export default RoomList;
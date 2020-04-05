import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import {RoomConsumer } from '../Context'
function RoomContainer(props) {
    return (
        <RoomConsumer>
            {
                value=>{
                    const {SortedRooms,rooms}=value;
                    return(
                      <div className="container-fluid">
                      <RoomFilter rooms={rooms}/>
                      <RoomList SortedRooms={SortedRooms}/>
                      </div>
                    )
                }
            }
        </RoomConsumer>
    );
}

export default RoomContainer;
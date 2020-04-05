import React from 'react';
import Hero from '../Components/Hero';
import RoomContainer from '../Components/RoomContainer';

function Rooms(props) {
    return (
        <div>
            <Hero hero="room-image" tit="Rooms" subtit="CheckOut" linktit="Return to Home" tolink="/" />
            <RoomContainer />
        </div>
        
    );
}

export default Rooms;
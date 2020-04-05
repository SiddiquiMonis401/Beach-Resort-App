import React from 'react';
import Hero from '../Components/Hero';
import Services from '../Components/Services';
import FeaturesRooms from '../Components/FeaturesRooms'
function Home(props) {
    return (
        <div>
        
        <Hero hero="home-image" tit="Reserve your slot faster" subtit="Deluxe rooms starts at 499$" tolink="/rooms" linktit="Our Rooms" /> 
         <Services />
         <FeaturesRooms />
         
         </div>   
    );
}

export default Home;
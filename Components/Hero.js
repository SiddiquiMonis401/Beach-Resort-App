import React from 'react';
import '../App.css'
import Banner from './Banner';
function Hero({hero,tit,subtit,linktit,tolink}) {
    return (
        <div className={hero}>
          <Banner title={tit} subtitle={subtit} linktitle={linktit} tolink={tolink} />
       </div>
    );
}
Hero.defaultProps={
    hero:'home-image'
}
export default Hero;

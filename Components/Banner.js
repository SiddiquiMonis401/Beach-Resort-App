import React from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
function Banner({title,subtitle,tolink,linktitle}) {
    return (
        <div className="banner-design"> 
            <h1>{title}</h1>
            <div className="line-under-title"></div>
            <h4>{subtitle}</h4>
            <div className="">
            <button className="btn btn-secondary btn-style">
            <Link to={tolink} className="link">
                {linktitle}
            </Link>
            </button>
            
            
            </div>

        </div>
    );
}
Banner.defaultProps={
   
}

export default Banner;
import React from 'react';
import logo from '../images/beachResort.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

function Navbar(props) {
    return (
        <nav className="container-fluid nav-background">
             <div className="row">
                <div className="col-lg-4">

                   
                       <Link to="/">
                       <img  style={{marginTop:'13px'}}src={logo} alt="Logo" />
                       </Link>
                   
                </div>
                <div className="col-lg-4">
                     <ul className="ul-design">
                         <li className="link-li">
                             <Link to="/" className="navbar-link">Home</Link>
                         </li>
                         <li className="link-li">
                             <Link to="/rooms" className="navbar-link">Rooms</Link>
                         </li>
                     </ul>
                </div>
             </div>
             
             
        </nav>
    );
}

export default Navbar;
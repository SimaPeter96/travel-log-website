import React from "react"
import "./Navbar.css";
import {TravelLogo} from '../Images/TravelAppLogo.png'

const Navbar = ()  => {
    return <div className="Navbar">
        <div className="LogoDiv">
          <TravelLogo className='logo'/>  
        </div>
    </div>;
}



export default Navbar;
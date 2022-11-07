import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    
    return(
        <nav className="navbar bg-primary justify-content-start align-items-center p-3 mr-4">
            <a className="navbar-brand" href="/trips">
                <img src="https://img.lovepik.com/free-png/20210926/lovepik-airplane-icon-png-image_401420921_wh1200.png" width="40" height="40" alt="travel-logo"></img>
            </a>
            <Link to={"/trips"} className="navbar-brand text-decoration-none text-white"><h4>My Trips</h4></Link>
            <Link to={"/trip/create"} className="navbar-brand text-decoration-none text-white"><h4>Add Trip</h4></Link>
        </nav>
        
    )
}

export default NavBar
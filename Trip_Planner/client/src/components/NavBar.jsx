import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    
    return(
        <nav className="navbar justify-content-start align-items-center p-3 mr-4">
            <a className="navbar-brand" href="/trips">
                <img width="40" height="40" alt="airplane_logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjmLj5xb476WS04R2uix_v00uGJBMfXlsQYw&usqp=CAU"></img>
            </a>
            <Link to={"/trips"} className="navbar-brand text-decoration-none text-white"><h4>My Trips</h4></Link>
            <Link to={"/trip/create"} className="navbar-brand text-decoration-none text-white"><h4>Add Trip</h4></Link>
        </nav>
        
    )
}

export default NavBar
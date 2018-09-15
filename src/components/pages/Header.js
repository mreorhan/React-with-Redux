import React from 'react'
import { Link} from 'react-router-dom'
import '../../App.js'
const Header = ()=>{
    return(
        <div className="header">
            <Link to="/">Home</Link> <Link to="/add">add</Link> <Link to="/login">login</Link>
        </div>
    )
}

export default Header;
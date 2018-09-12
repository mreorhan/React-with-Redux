import React from 'react'
import {Link} from 'react-router-dom'

 const Details = location =>{
     return(
         <div><Link to={`/location/${location._id}`}>Edit</Link></div>
     )
 }
 const Location=({location})=>{
    return(
        <div>
            <li>{location.title}
            {Details(location)}
            </li>
        </div>
    )
}

export default Location
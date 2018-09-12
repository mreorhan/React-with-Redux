import React from 'react'
import '../../css/loader.css'



const Loader = ({size}) =>{
    const loaderStyle = {
        width:size
    };
    return(
        <div className="showbox">
            <div className="loader" style={loaderStyle}>
                <svg className="circular" viewBox="25 25 50 50">
                <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="4" strokeMiterlimit="10"/>
                </svg>
            </div>
        </div>
    )
}
export default Loader
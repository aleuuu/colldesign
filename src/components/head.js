import React from 'react'
import {Link} from 'react-router-dom'

function Head(){
    return(
        <ul id="head">
            <Link to="/"><li>Main</li></Link>
            <Link to="/cours"><li>Course</li></Link>
            <Link to="/chat"><li>Chat</li></Link>
            <Link to="/registration"><li>Registration</li></Link>
        </ul>
    )
}

export default Head()
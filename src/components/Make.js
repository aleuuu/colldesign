import React from 'react'
import { Link } from 'react-router-dom'


function Make() {
    return (
        <div className='row'>
            <div className="makeBy">
                <h4>MAKE BY A THIRD-YEAR STUDENT</h4>
                <p><Link to="/makeby">Medvedev Dmitriy</Link></p>
            </div>
        </div>
    )
}

export default Make()
import React from 'react'
import {Link} from 'react-router-dom'

function GraphMain(){
    return(
        <div className="mainCours" id="web">
            <Link to="/cours"><div className="back_arrowBlack"></div></Link>
            <div className="containerforKurs">
                <div>
                    <h1>Graph дизайн</h1>
                    
                </div>
            </div>
            <Link to="/cours/graph"><div className="forward_arrowBlack"></div></Link>
        </div>
    )
}

export default GraphMain();
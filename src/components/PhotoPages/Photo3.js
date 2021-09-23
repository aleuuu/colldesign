import React from 'react'
import Photo3 from './photo/photo_3.jpg';
import {Link} from 'react-router-dom';

function PhotoPage(){
    return(
        <div className="main black"  id="web">
            <Link to="/photo/2"><div className="back_arrowBlack" id="arWhiteB"></div></Link>
            <div className="container">
                <div  className="forA">
                    <img src={Photo3} className="Photo"></img>
                    <Link to="/makeby">Назад</Link>
                </div>    
            </div>
            <Link to="/photo/4"><div className="forward_arrowBlack" id="arWhiteF"></div></Link>
        </div>
    )
}

export default PhotoPage();
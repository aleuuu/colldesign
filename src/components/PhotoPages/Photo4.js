import React from 'react'
import Photo4 from './photo/photo_4.jpg';
import {Link} from 'react-router-dom';

function PhotoPage(){
    return(
        <div className="main black"  id="web">
            <Link to="/photo/3"><div className="back_arrowBlack" id="arWhiteB"></div></Link>
            <div className="container">
                <div  className="forA">
                    <img src={Photo4}  className="Photo"></img>
                    <Link to="/makeby">Назад</Link>
                </div>
            </div>
            <Link to="/photo/5"><div className="forward_arrowBlack" id="arWhiteF"></div></Link>
        </div>
    )
}

export default PhotoPage();
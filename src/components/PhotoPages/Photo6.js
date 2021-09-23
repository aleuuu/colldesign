import React from 'react'
import Photo6 from './photo/photo_6.jpg';
import {Link} from 'react-router-dom';

function PhotoPage(){
    return(
        <div className="main black"  id="web">
            <Link to="/photo/5"><div className="back_arrowBlack" id="arWhiteB"></div></Link>
            <div className="container">
                <div  className="forA">
                    <img src={Photo6} className="Photo"></img>
                    <Link to="/makeby">Назад</Link>
                </div>
            </div>
            <Link to="/photo/1" className="forward_arrowBlack" id="arWhiteF"><div ></div></Link>
        </div>
    )
}

export default PhotoPage();
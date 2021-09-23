import React from 'react'
import { Link } from 'react-router-dom'
import Dima from '../photo/love_is.png'
import Post from './Post/Post'

const Block = (props) => {
    return (
        <div className="blockCours" id={props.id}><Link to={props.path}><p></p></Link></div>
    )
}

function MakeBy(props) {
    return (
        <div className="mainCours">
            <div className="container">
                <h1>The Creator of Site</h1>
                <div className="card">
                    <img className="profile" src={Dima}></img>
                    <div>
                        <h2>
                            Dmirtiy
                        </h2>
                        <p>Student 3 rang<br></br>Togliatti Social and Pedagogical College</p>
                        <p>Age: 18 years</p>
                        <p>
                            <br></br>
                            Phone: 89967204992
                            <br></br>
                            mail: neon_vill@mail.ru    vk: i_hurt_myself
                        </p>
                    </div>
                    {/* <div className="soft_things" id="power"></div>
                    <div className="soft_things" id="powerR"></div>
                    <div className="soft_things" id="power"></div>
                    <div className="soft_things" id="powerR"></div>
                    <div className="soft_things" id="power"></div>
                    <div className="soft_things" id="powerR"></div>
                    <div className="soft_things" id="power"></div> */}
                </div>
                
            </div>
            <div className="container">
                <h1>Photo</h1>
                <div className="rowCours">
                    <Block path="/photo/1" id="photo_1"></Block>
                    <Block path="/photo/2" id="photo_2"></Block>
                    <Block path="/photo/3" id="photo_3"></Block>
                    <Block path="/photo/4" id="photo_4"></Block>
                    <Block path="/photo/5" id="photo_5"></Block>
                    <Block path="/photo/6" id="photo_6"></Block>
                </div>
            </div>
        </div>
    )
}

export default MakeBy();
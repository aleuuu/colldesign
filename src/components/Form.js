import React from 'react'
import { Link } from 'react-router-dom'
import Dima from '../photo/love_is.png'

function Form() {
    return (
        <div className="mainCours">
            <div className="container">
                <h1>Registration/Autorisation</h1>
                <div className="card_form">
                    <form>
                        <p>Registration</p>
                        <input type="username" name="name" placeholder="Name"></input>
                        <input type="email" name="name" placeholder="Email"></input>
                        <input type="password" name="name" placeholder="Password"></input>
                        <input type="password" name="name" placeholder="Repeat Password"></input>
                        <Link to="/autorisation">Already have an account?</Link>
                        <button>Sign up</button>
                    </form>
                    <form>
                        <p>Autorisation</p>
                        <input type="username" name="name" placeholder="Email"></input>
                        <input type="password" name="name" placeholder="Password"></input>
                        <button>Login</button>
                        
                    </form>
                    {/* <div className="soft_things" id="power"></div>
                    <div className="soft_things" id="powerR"></div>
                    <div className="soft_things" id="power"></div>
                    <div className="soft_things" id="powerR"></div>
                    <div className="soft_things" id="power"></div>
                    <div className="soft_things" id="powerR"></div>
                    <div className="soft_things" id="power"></div> */}
                </div>
            </div>
        </div>
    )
}

export default Form();
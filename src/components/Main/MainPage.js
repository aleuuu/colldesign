import React from 'react'
import {Link} from 'react-router-dom'

function Left(){
    return(
        <div className="main">
            <div className="container">
                <h1>Main page</h1>
                <div className="rowDescription">
                    <div className="left">
                        <h3>
                            Welcome to the site!
                        </h3>
                        <p>
                        This site is my coursework that will help you start<br></br> learning web design and site layout, you
                        will learn HTML and CSS, as well as the basics of PHP
                        Get a good base, on the basis of which you can fully study this specialty
                        That's it!
                        </p>
                    </div>
                    <div className="right">
                        <h3>
                            How to start learning?
                        </h3>
                        <p>
                            It's very simple!
                            In fact, this is not too easy, you will have to make an effort. At first, nothing will work out, but I have <Link to="/cours">course</Link> that will help you where you
                            can learn the basics of layout very quickly...
                        </p>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Left();
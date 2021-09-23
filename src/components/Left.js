import React from 'react'
import Head from './head'
import MakeBy from './Make'
import Slogan from './Slogan'
import Literature from './Literature'
import Footer from './Footer'

function Left() {
    return (
        <div className="leftBlock">
            <div className="container">
                {Head}
                {MakeBy}
                {Slogan}
                {Literature}
                {Footer}
            </div>
        </div>
    )
}

export default Left;
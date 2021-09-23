import React from 'react'
import { Link } from 'react-router-dom'

const Block = (props) => {
    return (
        <div className="blockCours" id={props.id}><Link to={props.path}><p>{props.name}</p></Link></div>
    )
}

function Couse() {
    return (
        <div className="mainCours">
            <div className="container">
                <h1 id="aviable">Aviable Course</h1>
                <div className="rowCours">
                    <Block name="Web Developer" path="/cours/web" id="violet"></Block>
                    <Block name="Gpraph Designe" path="/cours/graph" id="blue"></Block>
                    <Block name="Php Developer" path="/cours/" id="skin"></Block>
                    <Block name="React JS" path="/cours/" id="red"></Block>
                    <Block name="React Native" path="/cours/" id="lightblue"></Block>
                    <Block name="Java Script" path="/cours/" id="lightgreen"></Block>
                    <Block name="Marketing" path="/cours/" id="pink"></Block>
                    <Block name="Game Designe" path="/cours/" id="darkpink"></Block>

                    {/* <div className="blockCours" id="violet"><Link to="/cours/graph"><p>Graph Designe</p></Link></div>
                    <div className="blockCours" id="skin"><p>Php Developer</p></div>
                    <div className="blockCours" id="red"><p>React JS</p></div>
                    <div className="blockCours" id="lightblue"><p>React Native</p></div>
                    <div className="blockCours" id="lightgreen"><p>Java Script</p></div>
                    <div className="blockCours" id="pink"><p>Marketing</p></div>
                    <div className="blockCours" id="darkpink"><p>Game Designe</p></div> */}
                </div>
            </div>
        </div>
    )
}

export default Couse();
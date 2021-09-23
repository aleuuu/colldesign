import React from 'react'

function Post(props) {
    return (
        <div className="chatBlock">
            <p><strong>{props.name}</strong><br></br>{props.email}</p>
            <p>{props.text}</p>
            <button>Likes {props.count}</button>
        </div>
    )
}

export default Post
import React from 'react'
import { Link } from 'react-router-dom'
import Dima from '../photo/love_is.png'
import Post from './Post/Post'


function Chat(props) {
    
    let PostElement =
    props.posts.map(post => <Post text={post.text} name={post.name} email={post.email} count={post.count}></Post>)
    
    let nameText =React.createRef();
    let emailText = React.createRef();
    let messageText = React.createRef();

    let createNewPost = () => {
        let text = messageText.current.value;
        let email = emailText.current.value;
        let name = nameText.current.value;
        props.addPost(text, email, name)
    }

    return (
        <div className="mainCours">
            <div className="container">
                <h1>Chat</h1>
                <form className="posts">
                    <input type="name" name="username"  placeholder="Name" ref={nameText}></input>
                    <input type="email" name="email" placeholder="Email" ref={emailText}></input>
                    <textarea type="text" name="message" placeholder="Message" ref={messageText}></textarea>
                    <div className="boxButton">
                            <button onClick={createNewPost}>Send</button>
                    </div>
                </form>
                <div className="card">
                    <div>
                        {PostElement}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat;
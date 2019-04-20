import React, { Component } from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = (props) => {
    let posts = props.postsData.map((p) => {
        return(
            <Post message={p.message} likesCount={p.likesCount}/>
        );
    });

    let newPostElement = React.createRef();

    let addPost= () => {
    
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = ' ';
    };

    

    return (
       <div className={s.wrp}>
            My posts
            <div>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost}>ADD POST</button>
                <button>REMOVE</button>
            </div>
            <div className={s.posts}>
                { posts }
            </div>
        </div>
    )

}
    export default MyPosts;

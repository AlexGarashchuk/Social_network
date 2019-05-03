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
        props.dispatch( {type: "ADD-POST"} );
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = { type: "UPDATE-NEW-POST-TEXT", newText: text };
        props.dispatch( action );
    }
    
    return (
       <div className={s.wrp}>
            <h3>My posts</h3>
            <div className={s.myPost}>
                <textarea ref={newPostElement} 
                    onChange={onPostChange} 
                    value={props.newPostText} 
                    className={s.myPostTextarea} />
               
                <button onClick={addPost} className={s.btn}>ADD POST</button>
            </div>
            <div className={s.posts}>
                { posts }
            </div>
        </div>
    )

}
    export default MyPosts;

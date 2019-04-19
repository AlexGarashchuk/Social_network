import React, { Component } from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    let posts = props.postsData.map((p) => {
        return(
            <Post message={p.message} likesCount={p.likesCount}/>
        );
    });

    return (
       <div className={s.wrp}>
            My posts
            <div>
                <textarea></textarea>
                <button>ADD POST</button>
                <button>REMOVE</button>
            </div>
            <div className={s.posts}>
                { posts }
            </div>
        </div>
    )

}
    export default MyPosts;

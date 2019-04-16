import React, { Component } from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
    
    let postsData = [
        {id:0, message:"Hi how are you?", likesCount:12},
        {id:1, message:"Hello world", likesCount:1},
        {id:2, message:"Hi how are you?", likesCount:2},
        {id:3, message:"Hello world", likesCount:33}
    ]


    return (
       <div className={s.wrp}>
            My posts
            <div>
                <textarea></textarea>
                <button>ADD POST</button>
                <button>REMOVE</button>
            </div>
            <div className={s.posts}>
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
                <Post message={postsData[2].message} likesCount={postsData[2].likesCount}/>
                <Post message={postsData[3].message} likesCount={postsData[3].likesCount}/>
                <Post />
            </div>
        </div>
    )

}
    export default MyPosts;

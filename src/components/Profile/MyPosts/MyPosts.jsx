import React, { Component } from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return (
       <div>
            My posts
            <div>
                <textarea></textarea>
                <button>ADD POST</button>
                <button>REMOVE</button>
            </div>
            <div className={s.posts}>
                <Post message="Dima"/>
                <Post message="Ihor"/>
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )

}
    export default MyPosts;

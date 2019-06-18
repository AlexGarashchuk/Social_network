import React, { Component } from 'react';
import s from './Post.module.css'
import Avatar from './Avatar/Avatar';

const Post = (props) => {
    return (
        <div className={s.item}>
            <div className={s.itemName}>
                <Avatar />
                { props.message }
            </div>
            
            <div className={s.like}>
                <img src="https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-63-256.png" alt=""/> { props.likesCount }
            </div>
               
        </div>
       
    )

}
    export default Post;

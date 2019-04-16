import React, { Component } from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <div className={s.itemName}>
                <img src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-256.png" alt=""/>
                { props.message }
            </div>
            
            <div className={s.like}>
                <img src="https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-63-256.png" alt=""/> { props.likesCount }
            </div>
               
        </div>
       
    )

}
    export default Post;

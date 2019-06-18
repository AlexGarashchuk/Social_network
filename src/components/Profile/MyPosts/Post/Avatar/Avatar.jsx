import React, { Component } from 'react';
import s from './Avatar.module.css'

const Avatar = (props) => {
    // let avatarDate = [
    //     {id:1, src: "https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-256.png"},
    //     {id:2, src: "https://cdn0.iconfinder.com/data/icons/avatar-vol-2-4/512/9-256.png"}
    // ]
    // let avatarItems = avatarDate.map( (photo) => {
    //     return(
    //         <img className={s.avatar} src={photo.src} alt=""/> 
    //     )
    // })
    return (
        <div>
            <img className={s.avatar} src="https://cdn0.iconfinder.com/data/icons/avatar-vol-2-4/512/9-256.png" alt=""/>
        </div>
       
    )

}
    export default Avatar;

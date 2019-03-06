import React, { Component } from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
       
            <div className={s.content}>
            <div>
                <img src="https://www.ctvnews.ca/polopoly_fs/1.4037876!/httpImage/image.jpg_gen/derivatives/landscape_1020/image.jpg" alt=""/>
            </div>
            <div>
                ava + description
            </div> 
            <MyPosts />
          </div>
      
        
   
    )

}
    export default Profile;

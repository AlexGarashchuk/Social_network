import React, { Component } from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts postsData={props.profilePage.postsData} 
                     updateNewPostText={props.updateNewPostText}
                     addPost={props.addPost}
                     newPostText={props.profilePage.newPostText} />
        </div>
    )

}
export default Profile;

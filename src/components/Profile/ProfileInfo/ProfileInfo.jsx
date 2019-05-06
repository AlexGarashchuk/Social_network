import React, { Component } from 'react';
import s from './ProfileInfo.module.css';
import ProfileInfoAva from './ProfileInfoAva.jsx/ProfileInfo';


const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.contentBg}></div>
            <div className={s.wrp}>
               <ProfileInfoAva />
            </div>
        </div>
    )

}
export default ProfileInfo;

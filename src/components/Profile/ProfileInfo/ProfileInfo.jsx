import React, { Component } from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.contentBg}></div>
            <div className={s.wrp}>
                ava + description
            </div>
        </div>
    )

}
export default ProfileInfo;

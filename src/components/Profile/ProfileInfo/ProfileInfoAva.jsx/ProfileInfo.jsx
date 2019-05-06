import React, { Component } from 'react';
import s from './../ProfileInfo.module.css';


const ProfileInfoAva = (props) => {
    return (
        <div className={s.ava}>
            <img className={s.ava_img} src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/avocado_scream_avatar_food-256.png" alt="" />
            <p className={s.ava_name}>Jon Dou</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique incidunt officia voluptate ut molestiae est earum fuga velit sed.
                 Nesciunt alias dolores impedit neque illum.</p>
        </div>
    )

}
export default ProfileInfoAva;

import React, { Component } from 'react';
import s from './Post.module.css'
import LikeCounts from './LikeCounts/LikeCounts';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://c6oxm85c.cloudimg.io/cdno/n/q85/https://az617363.vo.msecnd.net/imgmodels/models/md10001832/32c9cbac-ddb2-4c2a-b3f6-6f7bfd31703b_thumb.jpg" alt=""/>
               { props.message }
               <LikeCounts counts="10"/>
               
        </div>
       
    )

}
    export default Post;

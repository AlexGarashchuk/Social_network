import React, { Component } from 'react';
import s from './LikeCounts.module.css'

const LikeCounts = (props) => {
    return (
               <div>
                   Like { props.counts }
               </div>
     
       
    )

}
    export default LikeCounts;

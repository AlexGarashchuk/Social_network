import React, { Component } from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
let path = "/dialogs" + props.id;

    return(
        <div className={s.dialog + ' ' + s.active}>
            <NavLink  to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return(
        <div className={s.message}>{props.message}</div>
    )
}


const Dialogs = () => {

let dialogsData = [
    {id:0, name: "Dima"},
    {id:1, name: "Ivan"},
    {id:2, name: "Roma"},
    {id:3, name: "Inna"},
    {id:4, name: "Olha"}
];
let messagesData = [
    {id:0, message: "Hi"},
    {id:1, message: "How are you?"},
    {id:2, message: "The weather is good!"},
    {id:3, message: "The weather so good!"},
    {id:4, message: "The weather is cool!"}
]
let dialogs = dialogsData.map((d) => {
    return(
        <DialogsItem name={d.name} id={d.id} />
    )
});
let messages = messagesData.map((m) => {
    return(
        <Message message={m.message}/>
    )
});

    return (
        <div className={s.content}>
            <div className={s.wrp}>
                <div className={s.dialogs}>
                    <div className={s.dialogsItems}>
                        { dialogs }
                    </div>
                    <div className={s.messages}>
                        { messages }
                    </div>
                </div>

            </div>
        </div>



    )

}
export default Dialogs;

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

    return (
        <div className={s.content}>
            <div className={s.wrp}>
                <div className={s.dialogs}>
                    <div className={s.dialogsItems}>
                       <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id} />
                       <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id} />
                       <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id} />
                       <DialogsItem name={dialogsData[3].name} id={dialogsData[3].id} />
                       <DialogsItem name={dialogsData[4].name} id={dialogsData[4].id} />
                      
                       
                    </div>
                    <div className={s.messages}>
                        <Message message={messagesData[0].message}/>
                        <Message message={messagesData[1].message}/>
                        <Message message={messagesData[2].message}/>
                        <Message message={messagesData[3].message}/>
                        <Message message={messagesData[4].message}/>
                    </div>
                </div>

            </div>
        </div>



    )

}
export default Dialogs;

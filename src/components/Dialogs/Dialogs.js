import React, { Component } from 'react';
import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    // let dialogsData = [
    //     {id:0, name: "Dima"},
    //     {id:1, name: "Ivan"},
    //     {id:2, name: "Roma"},
    //     {id:3, name: "Inna"},
    //     {id:4, name: "Olha"}
    // ];
    // let messagesData = [
    //     {id:0, message: "Hi"},
    //     {id:1, message: "How are you?"},
    //     {id:2, message: "The weather is good!"},
    //     {id:3, message: "The weather so good!"},
    //     {id:4, message: "The weather is cool!"}
    // ]

let dialogs = props.dialogsData.map((d) => {
    return(
        <DialogsItem name={d.name} id={d.id} />
    )
});

let messages = props.messagesData.map((m) => {
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

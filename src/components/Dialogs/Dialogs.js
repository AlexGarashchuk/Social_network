import React, { Component } from 'react';
import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';


const Dialogs = (props) => {
let dialogs = props.state.dialogsData.map((d) => {
    return(
        <DialogsItem name={d.name} id={d.id} />
    )
});

let messages = props.state.messagesData.map((m) => {
    return(
        <Message message={m.message}/>
    )
});
let newMessage = React.createRef();
let addMessage = () =>{
    let text = newMessage.current.value;
    console.log(text);
}


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
                <div className={s.newMessage}>
                    <textarea className={s.newMessageContent} ref={newMessage}></textarea>
                    <button className={s.newMessageBtn} onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>



    )

}
export default Dialogs;

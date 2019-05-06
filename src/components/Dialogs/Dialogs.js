import React, { Component } from 'react';
import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/state';


const Dialogs = (props) => {

    let state = props.store.getState().messages;

    let dialogs = state.dialogsData.map(d => <DialogsItem name={d.name} id={d.id} /> );
    let messages = state.messagesData.map(m => <Message message={m.message} /> );
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch( sendMessageCreator() );
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch( updateNewMessageBodyCreator(body) );
    }


    return (
        <div className={s.content}>
            <div className={s.wrp}>
                <div className={s.dialogs}>
                    <div className={s.dialogsItems}>
                        {dialogs}
                    </div>
                    <div className={s.messages}>
                        <div>
                            {messages}
                        </div>
                        <div className={s.newMessage}>
                            <div>
                                <textarea className={s.newMessageContent}
                                          onChange={ onNewMessageChange }
                                          value={ newMessageBody }
                                          placeholder="Enter you message">
                                </textarea>
                            </div>
                            <div>
                                <button className={s.newMessageBtn} onClick={ onSendMessageClick }>Send message</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>



    )

}
export default Dialogs;

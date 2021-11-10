import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let state = props.profilePage;

    let dialogElements = state.dialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messageElements = state.messageContent.map(data => <Message message={data.message} id={data.id}/>)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onMewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div><textarea value={newMessageBody}
                               onChange={onMewMessageChange}
                               placeholder="Enter your message"></textarea></div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>


    )
}

export default Dialogs;




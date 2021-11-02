import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {

    let dialogElements = props.state.dialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messageElements = props.state.messageContent.map(data => <Message message={data.message} id={data.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>


    )
}

export default Dialogs;
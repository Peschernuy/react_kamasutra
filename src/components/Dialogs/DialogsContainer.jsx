import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StroreContext";


const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {
        (store) => {
            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator())
            }
            let onMewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body))
            }
            return <Dialogs updateNewMessageBody={onMewMessageChange}
                            sendMessage={onSendMessageClick}
                            profilePage={store.getState().profilePage}/>

        }
    }
    </StoreContext.Consumer>
}

export default DialogsContainer;




const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogData: [
        {id: 1, name: "Charlie"},
        {id: 2, name: "Pricheska"},
        {id: 3, name: "Umka"},
        {id: 4, name: "Wader"},
        {id: 5, name: "Tina"}
    ],
    messageContent: [
        {id: 1, message: "Hi"},
        {id: 2, message: "Greatings!"},
        {id: 3, message: "Bark bark"},
        {id: 4, message: "So loud!"},
        {id: 5, message: "Fuck eah!!!"}
    ],
    newMessageBody: ''

};

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return  {
                ...state,
                newMessageBody: action.body
            };
        case  SEND_MESSAGE:
            let body = state.newMessageBody;
            return  {
                ...state,
                newMessageBody: '',
                messageContent: [...state.messageContent, {id: 6, message: body}]
            };

        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default messagesReducer;
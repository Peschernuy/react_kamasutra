import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import sidebarReducer from "./sidebarReducer";


let store = {
    _state: {
        messagesPage: {
            messagesData: [
                {id: 1, message: 'Hi, how are you? ', like: 7},
                {id: 2, message: 'Its my first post! ', like: 8},
                {id: 3, message: 'Woof woof!!! ', like: 9}
            ],
            newPostText: 'It Kamasutra'

        },
        profilePage: {
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

        },
        sidebar: {
            sidebarMember: [
                {name: 'Charlie'},
                {name: 'Pricheska'},
                {name: 'Dina'}
            ],
            sidebarAva: [
                {img: 'https://domashnij-zapovednik.com/wp-content/uploads/2019/06/mal.F7SGE.png'},
                {img: 'https://domashnij-zapovednik.com/wp-content/uploads/2019/06/mal.F7SGE.png'},
                {img: 'https://domashnij-zapovednik.com/wp-content/uploads/2019/06/mal.F7SGE.png'}
            ]
        },


    },
    _callSubscriber() {

    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.messagesPage = profileReducer(this._state.messagesPage, action)
        this._state.profilePage = messagesReducer(this._state.profilePage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state);
    }

}

export default store;
window.store = store;
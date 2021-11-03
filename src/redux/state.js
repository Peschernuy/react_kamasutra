let store = {
    _state: {
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

        },

        messagesPage: {
            messagesData: [
                {id: 1, message: 'Hi, how are you? ', like: 7},
                {id: 2, message: 'Its my first post! ', like: 8},
                {id: 3, message: 'Woof woof!!! ', like: 9}
            ],
            newPostText: 'It Kamasutra'

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
    getState() {
        return this._state;
    },
    _rerenderEntireTree() {
        console.log('State is changed')
    },
    _callSubscriber() {
      console.log('state changing')
    },
    addPost() {
        let newPost = {
            id: 4,
            message: this._state.messagesPage.newPostText,
            like: 0
        };
        this._state.messagesPage.messagesData.push(newPost);
        this._state.messagesPage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.messagesPage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }

}


export default store;
window.store = store;
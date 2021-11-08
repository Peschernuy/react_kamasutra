const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    messagesData: [
        {id: 1, message: 'Hi, how are you? ', like: 7},
        {id: 2, message: 'Its my first post! ', like: 8},
        {id: 3, message: 'Woof woof!!! ', like: 9}
    ],
    newPostText: 'It Kamasutra'

};

 const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
                like: 0
            };
            state.messagesData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {

    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

export default profileReducer;
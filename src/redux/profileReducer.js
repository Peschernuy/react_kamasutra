const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    messagesData: [
        {id: 1, message: 'Hi, how are you? ', like: 7},
        {id: 2, message: 'Its my first post! ', like: 8},
        {id: 3, message: 'Woof woof!!! ', like: 9}
    ],
    newPostText: 'It Kamasutra',
    profile: null

};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: state.newPostText,
                like: 0
            };
            return {
                ...state,
                messagesData: [...state.messagesData,newPost],
                newPostText: ''

            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE, profile
    }
}
export const updateNewPostTextActionCreator = (text) => {

    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

export default profileReducer;
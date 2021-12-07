import {profileAPI, userAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    messagesData: [
        {id: 1, message: 'Hi, how are you? ', like: 7},
        {id: 2, message: 'Its my first post! ', like: 8},
        {id: 3, message: 'Woof woof!!! ', like: 9}
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: action.newPostText,
                like: 0
            };
            return {
                ...state,
                messagesData: [...state.messagesData, newPost],
                newPostText: ''
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case DELETE_POST: {
            return {...state, messagesData: state.messagesData.filter(p => p.id != action.postId)}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => {
    return {type: ADD_POST, newPostText}
}
export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile}
}
export const setStatus = (status) => {
    return {type: SET_STATUS, status}
}
export const deletePost = (postId) => {
    return {type: DELETE_POST, postId}
}
export const getUserProfile = (userId) => async (dispatch) => {
    let response = await userAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
}
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export default profileReducer;
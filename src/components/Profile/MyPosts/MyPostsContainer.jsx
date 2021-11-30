import React from 'react';
import {addPostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        messagesData: state.messagesPage.messagesData,
        newPostText: state.messagesPage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;
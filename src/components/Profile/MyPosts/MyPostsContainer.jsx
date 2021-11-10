import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StroreContext";


const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                };

                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                }
                    return <MyPosts updateNewPostText={onPostChange}
                                    addPost={addPost}
                                    messagesData={state.messagesPage.messagesData}
                                    newPostText={state.messagesPage.newPostText}/>
                }
            }
        </StoreContext.Consumer>
    )

}



export default MyPostsContainer;
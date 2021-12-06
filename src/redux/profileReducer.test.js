import React from "react";
import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";
import {render, screen} from "@testing-library/react";
import App from "../App";
let state = {
    messagesData: [
        {id: 1, message: 'Hi, how are you? ', like: 7},
        {id: 2, message: 'Its my first post! ', like: 8},
        {id: 3, message: 'Woof woof!!! ', like: 9}
    ]
};

test('length of posts should be incremented', () => {
    let action = addPostActionCreator('it-kamasutra');

    let newState = profileReducer(state, action)

    expect(newState.messagesData.length).toBe(4) ;
    expect(newState.messagesData[3].message).toBe('it-kamasutra') ;
});

test('text in 4 message', () => {
    let action = addPostActionCreator('it-kamasutra');
    let newState = profileReducer(state, action)
    expect(newState.messagesData[3].message).toBe('it-kamasutra') ;
});

test('deleting test', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action)
    expect(newState.messagesData.length).toBe(2) ;
});
test('deleting test incorrect id', () => {
    let action = deletePost(666);
    let newState = profileReducer(state, action)
    expect(newState.messagesData.length).toBe(3) ;
});



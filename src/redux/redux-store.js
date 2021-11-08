import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import sidebarReducer from "./sidebarReducer";

let reducers = combineReducers({
    messagesPage: profileReducer,
    profilePage: messagesReducer,
    sidebar: sidebarReducer
});

let store = createStore(reducers);

export default store;
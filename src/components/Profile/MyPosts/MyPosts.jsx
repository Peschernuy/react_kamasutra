import React from 'react';
import m from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let messagesElements = props.messagesData.map(data => <Post message={data.message} like={data.like}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({ type: 'ADD-POST' });
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        props.dispatch(action);


    }

    return <div className={m.wrapper}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Send</button>
            </div>
        </div>
        <div className={m.posts}>
            {messagesElements}
        </div>
    </div>


};

export default MyPosts;
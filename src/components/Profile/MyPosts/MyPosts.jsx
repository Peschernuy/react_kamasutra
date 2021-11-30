import React from 'react';
import m from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";



const MyPosts = (props) => {

    let messagesElements = props.messagesData.map(data => <Post message={data.message} like={data.like}/>);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
      props.addPost(values.newPostText);
    };

    return <div className={m.wrapper}>
        <h3>My posts</h3>
        <AddNewPostFormRedux onSubmit={onAddPost}/>
        <div className={m.posts}>
            {messagesElements}
        </div>
    </div>


};

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText'  component='textarea'/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'}) (AddNewPostForm)

export default MyPosts;
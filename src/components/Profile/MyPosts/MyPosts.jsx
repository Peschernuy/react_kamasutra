import React from 'react';
import m from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let messagesElements = props.messagesData.map(data => <Post message={data.message} like={data.like}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);


    }

  return  <div className={m.wrapper}>
      <h3>My posts</h3>
      <div>
          <div>
              <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
          </div>
       <div>
           <button onClick={ addPost }>Send</button>
       </div>
      </div>
      <div className={m.posts}>
          {messagesElements}
      </div>
    </div>
  


  
};

export default MyPosts;
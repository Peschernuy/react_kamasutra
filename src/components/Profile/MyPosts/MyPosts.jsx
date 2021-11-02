import React from 'react';
import m from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let messagesElements = props.messagesData.map(data => <Post message={data.message} like={data.like}/>);

    let newPostElement = React.createRef();

    let addPost = () => {

        let text = newPostElement.current.value;
        props.addPost(text);
    };

  return  <div className={m.wrapper}>
      <h3>My posts</h3>
      <div>
          <div>
              <textarea ref={newPostElement}></textarea>
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
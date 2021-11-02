import React from 'react';
import m from './Post.module.css';

const Post = (props) => {
  return  (
  <div className={m.item}>
        <img src="https://www.thekennelclub.org.uk/media/1655/pekingese-headshot.jpg?mode=pad&width=1000&rnd=132143810180000000" alt="#" />
          {props.message} 
          <span>{props.like}</span>
        </div>
  )   
};

export default Post;
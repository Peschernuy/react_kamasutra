import React from 'react';
import p from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

  return <div>
    <img className={p.background} src='https://www.tampabay.com/resizer//hn1E6MR3v14d1ZqURuo9gVNo-uo=/1140x641/smart/cloudfront-us-east-1.images.arcpublishing.com/tbt/4HKEGVF4Y56YWRKEZ37PVCAKCA.jpg'/>
    <ProfileInfo />
    <MyPostsContainer  />
  </div>
  
}

export default Profile;
 import React from 'react';
import p from './ProfileInfo.module.css';
 import Preloader from "../../common/preloader/preloader";
 import ProfileStatus from "./ProfileStatus";
 import ProfileStatusWithHooks from "./ProfileStatusWithHooks";



 const ProfileInfo = ({profile,status, updateStatus}) => {

  if(!profile) {
    return <Preloader />
  }

  return <div>

    {/*<img className={p.avatar} src='https://i.postimg.cc/JhVmbP4z/umka-ava.png' alt='avatar'/>*/}
    <div className={p.avainfo}>
      {/*<img src={props.profile.photos.small} /><br/>*/}
      <img src={profile.photos.large} /><br/>
        <ProfileStatusWithHooks status ={status} updateStatus={updateStatus}/>
      <div>{profile.userID} </div><br/>
      <h3>{profile.aboutMe} </h3><br/>
      <h2>{profile.fullName} </h2><br/>
      <h3>{profile.lookingForAJob} </h3><br/>
      <h3>{profile.lookingForAJobDescription} </h3><br/>
      <div>{profile.contacts.github} </div><br/>
      <div>{profile.contacts.vk} </div><br/>
      <div>{profile.contacts.facebook} </div><br/>
      <div>{profile.contacts.instagram} </div><br/>
      <div>{profile.contacts.website} </div><br/>
      <div>{profile.contacts.youtube} </div><br/>
      <div>{profile.contacts.mainLink} </div><br/>

      </div>

  </div>
  
}

export default ProfileInfo;
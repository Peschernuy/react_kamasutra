 import React from 'react';
import p from './ProfileInfo.module.css';
 import Preloader from "../../common/preloader/preloader";



 const ProfileInfo = (props) => {
  if(!props.profile) {
    return <Preloader />
  }

  return <div>
    {/*<img className={p.avatar} src='https://i.postimg.cc/JhVmbP4z/umka-ava.png' alt='avatar'/>*/}
    <div className={p.avainfo}>
      <img src={props.profile.photos.small} /><br/>
      {/*<div>{props.profile.userID} </div><br/>*/}
      {/*<div>{props.profile.fullName} </div><br/>*/}
      {/*<div>{props.profile.lookingForAJob} </div><br/>*/}
      {/*<div>{props.profile.lookingForAJobDescription} </div><br/>*/}
      {/*<div>{props.profile.contacts.github} </div><br/>*/}
      {/*<div>{props.profile.contacts.vk} </div><br/>*/}
      {/*<div>{props.profile.contacts.facebook} </div><br/>*/}
      {/*<div>{props.profile.contacts.instagram} </div><br/>*/}
      {/*<div>{props.profile.contacts.website} </div><br/>*/}
      {/*<div>{props.profile.contacts.youtube} </div><br/>*/}
      {/*<div>{props.profile.contacts.mainLink} </div><br/>*/}

      </div>

  </div>
  
}

export default ProfileInfo;
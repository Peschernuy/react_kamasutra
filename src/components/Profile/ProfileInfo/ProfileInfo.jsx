 import React from 'react';
import p from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return <div>
    <img className={p.avatar} src='https://i.postimg.cc/JhVmbP4z/umka-ava.png' alt='avatar'/>
    <div className={p.avainfo}>
      Woof Woof!<br/>
      My name is Umka<br/>
      And i have a curvy nose
      </div>

  </div>
  
}

export default ProfileInfo;
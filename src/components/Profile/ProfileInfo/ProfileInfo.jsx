import React, {useState} from 'react';
import p from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/preloader";

import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/user-image.png'
import ProfileDataForm from "./ProfileDataForm";



const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit =  (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        });

    }
    return <div>
        {/*<img className={p.avatar} src='https://i.postimg.cc/JhVmbP4z/umka-ava.png' alt='avatar'/>*/}
        <div className={p.avainfo}>
            {/*<img src={props.profile.photos.small} /><br/>*/}
            <img className={p.mainPhoto} src={profile.photos.large || userPhoto}/><br/>
            {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            {editMode
                ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner}/>}
        </div>

    </div>

}
const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
        <b>{profile.fullName} </b><br/>
        <b>About me: </b> {profile.aboutMe}<br/>
        <b>Looking for a job: </b> {profile.lookingForAJob ? 'yes' : 'no'} <br/>
        {profile.lookingForAJob && <div>
            <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
        }<br/>
        <b>Contacts</b>: {Object.keys(profile.contacts).map(key =>{
        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
    })}
    </div>
}


const Contact = ({contactTitle, contactValue}) => {
    return <div className={p.contact}><b>{contactTitle}</b>:{contactValue}</div>
}

export default ProfileInfo;
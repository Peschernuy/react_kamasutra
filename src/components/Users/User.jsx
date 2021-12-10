import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user-image.png";
import {NavLink} from "react-router-dom";

let User = ({user,followingInProgress, unfollow, follow  }) => {
    return (
        <div>
            <div key={user.id}>
                <span>
                    <div className={styles.userPhoto}>
                        <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                unfollow(user.id);
                            }}>Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                follow(user.id);
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.id}</div>
                        <div>{user.name}</div>
                    </span>
                    <span>
                        <div>{"user.location.city"}</div>
                        <div>{"user.location.city"}</div>
                    </span>
                </span>
            </div>
        </div>)
}

export default User;
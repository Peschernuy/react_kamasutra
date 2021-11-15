import React from "react";
import styles from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user-image.png'


let Users = (props) => {
    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items)
            });
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div className={styles.userPhoto}>
                        <img src={ u.photos.small != null ? u.photos.small : userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.id}</div>
                        <div>{u.name}</div>
                    </span>
                    <span>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;
import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user-image.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}>{p}</span>
            })}

        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div className={styles.userPhoto}>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
                                    headers:     {
                                        "API-KEY": "e29eaf34-0078-4db0-8f75-2a0c55c57af6"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    });

                            }}>Unfollow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
                                    headers:     {
                                        "API-KEY": "e29eaf34-0078-4db0-8f75-2a0c55c57af6"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    });

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
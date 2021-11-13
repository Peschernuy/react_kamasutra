import React from "react";
import styles from './Users.module.css'


let Users = (props) => {
    if(props.users.length === 0 ) {
        props.setUsers([
            {
                photoUrl: 'https://i.postimg.cc/JhVmbP4z/umka-ava.png',
                id: 1,
                followed: false,
                fullname: 'Umka',
                status: 'I am the boss',
                location: {city: 'Kharkiv', country: 'Ukraine'}
            },
            {
                photoUrl: 'http://www.krohotun.com/wp-content/uploads/funny.jpg',
                id: 2,
                followed: true,
                fullname: 'Bobik',
                status: 'I am the bobik',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                photoUrl: 'https://4lapki.com/wp-content/uploads/2017/02/pekines-15.jpg',
                id: 3,
                followed: false,
                fullname: 'Sasha',
                status: 'I am the gruzin',
                location: {city: 'Batumi', country: 'Georgia'}
            }
            ]
        )
    }


    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div className={styles.userPhoto}>
                        <img src={u.photoUrl}/>
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
                        <div>{u.fullname}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;
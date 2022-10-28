import React from "react";
import styles from "./users.module.css";

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://i.pinimg.com/originals/73/8b/9e/738b9eab6be9a41a78c744d1be0fea84.jpg',
                    followed: false,
                    fullName: 'Sergey',
                    status: 'hard work always pays off',
                    location: {city: 'Kurgan', country: 'Russia'}
                },
                {
                    id: 2,
                    photoUrl: 'https://i.pinimg.com/originals/73/8b/9e/738b9eab6be9a41a78c744d1be0fea84.jpg',
                    followed: true,
                    fullName: 'Sergey',
                    status: 'hard work always pays off',
                    location: {city: 'Kurgan', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://i.pinimg.com/originals/73/8b/9e/738b9eab6be9a41a78c744d1be0fea84.jpg',
                    followed: false,
                    fullName: 'Sergey',
                    status: 'hard work always pays off',
                    location: {city: 'Kurgan', country: 'Russia'}
                }

            ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
    <span>
    <div>
        <img src={u.photoUrl} className={styles.userPhoto}/>
    </div>
    <div>
        {u.followed ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>:<button onClick={() => {props.follow(u.id)}}>Follow</button> }

    </div>
    </span>
                <span>
           <span>
    <div>{u.fullName}</div>
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
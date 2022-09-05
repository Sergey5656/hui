import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {NavLink} from "react-router-dom";


const MyPosts = () => {
  return <div className={s.Profile}>
    My post
    <div className={s.postsBlock}>
      <textarea> </textarea>
      <div>
      <button> Add post</button>
    </div>
    </div>
    <div className={s.textPost}>
    <Post message='Hallo youre beautyfull' likeCount='777' />
    <Post message='All Best' age='22' likeCount='23' />
    </div>
  </div>
}

export default MyPosts;
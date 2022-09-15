import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {NavLink} from "react-router-dom";
import DialogItem from "../../Dialogs/DialogItem/DialogItem";
import Message from "../../Dialogs/Message/Message";


const MyPosts = (props) => {
  /*let posts = [
    {id: 1, message: 'hip', likesCount: 5},
    {id: 2, message: 'hap', likesCount: 5},
    {id: 3, message: 'bmw', likesCount: 5},
    {id: 4, message: 'range rover', likesCount: 5},
    {id: 5, message: 'mybach', likesCount: 777},
  ]*/
  let postsElements = props.posts.map( p=> <Post message={p.message} id={p.id} likesCount={p.likesCount} />);
  return <div className={s.Profile}>

    My post

    <div className={s.postsBlock}>
      <textarea> </textarea>
      <div>
      <button> Add post</button>
    </div>
    </div>
    <div className={s.textPost}>
      {postsElements}
    </div>

  </div>

}

export default MyPosts;
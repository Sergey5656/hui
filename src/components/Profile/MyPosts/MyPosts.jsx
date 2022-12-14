import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {

  let postsElements = props.posts.map( p=> <Post message={p.message} id={p.id} likesCount={p.likesCount} />);
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();

  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);

}
  return <div className={s.Profile}>

    <h3>My post</h3>

    <div className={s.postsBlock}>
      <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
      <div>
      <button onClick={onAddPost}> Add post</button>
    </div>
    </div>
    <div className={s.textPost}>
      {postsElements}
    </div>

  </div>

}

export default MyPosts;
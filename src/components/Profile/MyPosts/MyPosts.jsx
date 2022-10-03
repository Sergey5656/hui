import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPost, updateNewPostText} from "../../../redux/state";


const MyPosts = (props) => {

  let postsElements = props.posts.map( p=> <Post message={p.message} id={p.id} likesCount={p.likesCount} />);
  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText (text);
}
  return <div className={s.Profile}>

    My post

    <div className={s.postsBlock}>
      <textarea onChange={onPostChange} ref={newPostElement}/>
      <div>
      <button onClick={addPost}> Add post</button>
    </div>
    </div>
    <div className={s.textPost}>
      {postsElements}
    </div>

  </div>

}

export default MyPosts;
import React from 'react';
import MyPosts from './MyPosts';
import Profileinfo from "../Profileinfo/Profileinfo";
import {updateNewPostText} from "../../../redux/state";





const Profile = (props) => {
  return (
  <div className="Profile">
    <Profileinfo />
    <MyPosts posts={props.profilePage.posts} addPost={props.addPost} newPostText={props.profilePage.newPostText} updateNewPostText={props.updateNewPostText} />
    </div>
  )
}

export default Profile;
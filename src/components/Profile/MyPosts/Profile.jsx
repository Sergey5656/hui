import React from 'react';
import MyPosts from './MyPosts';
import Profileinfo from "../Profileinfo/Profileinfo";






const Profile = (props) => {
  return (
  <div className="Profile">
    <Profileinfo />
    <MyPosts posts={props.profilePage.posts} addPost={props.addPost} newPostText={props.profilePage.newPostText} dispatch={props.dispatch} />
    </div>
  )
}

export default Profile;
import React from 'react';
import MyPosts from './MyPosts';
import Profileinfo from "../Profileinfo/Profileinfo";





const Profile = (props) => {
  return (
  <div className="Profile">
    <Profileinfo />
    <MyPosts posts={props.state.posts} addPost={props.addPost} />
    </div>
  )
}

export default Profile;
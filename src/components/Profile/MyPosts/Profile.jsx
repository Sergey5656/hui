import React from 'react';
import MyPosts from './MyPosts';
import Profileinfo from "../Profileinfo/Profileinfo";
import MyPostsContainer from "./MyPostsContainer";






const Profile = (props) => {
  return (
  <div className="Profile">
    <Profileinfo />
    <MyPostsContainer />
    </div>
  )
}

export default Profile;
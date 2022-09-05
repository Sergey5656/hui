import React from 'react';
import MyPosts from './MyPosts';
import Profileinfo from "../Profileinfo/Profileinfo";





const Profile = () => {
  return (
  <div className="Profile">
    <Profileinfo />
    <MyPosts />
    </div>
  )
}

export default Profile;
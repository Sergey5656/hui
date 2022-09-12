import React from 'react';

import s from './Post.module.css';


const Post = ({message, age, likeCount}) => {
  return (
    <div className={s.posts}>
   <div>

   < img src='https://get.wallhere.com/photo/landscape-mountains-monochrome-lake-nature-reflection-photography-Norway-horizon-atmosphere-dusk-cloud-mountain-dawn-darkness-atmospheric-phenomenon-computer-wallpaper-black-and-white-monochrome-photography-84306.jpg'/>
   {message}
   </div>
   <div>
     <span>like</span> {likeCount}
   </div>
    </div>
  )
}

export default Post;
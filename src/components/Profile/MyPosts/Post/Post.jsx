import React from 'react';

import s from './Post.module.css';


const Post = ({message, age, likeCount}) => {
  return (
    <div className={s.posts}>
    <div className={s.posts}>

   < img src='https://mc.today/wp-content/uploads/2021/12/Novost1-13.png' />
   {message}  {age}
   </div>
   <div>
     <span>like</span> {likeCount}
   </div>
    </div>
  )
}

export default Post;
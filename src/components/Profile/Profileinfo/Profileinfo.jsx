import React from 'react';
import s from './Profileinfo.module.css';
import Preloader from "../../common/Preloader/Preloader";


const Profileinfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return  (
  <div>
    <div>
      <img src='https://dvizhok.su/i/files2/auto/2020/09/Mercedes-Benz_S-Class_2020_V223_2.jpg' />
    </div>
    <div className={s.descriptionBlock}>
      <img src={props.profile.photos.large}/>
      ava+discription
    </div>
    </div>
      )
}
      export default  Profileinfo;
import React from 'react';

import s from './Post.module.css';

const whallMessage = (props) => {
    return <div className={s.wMassage}>{props.wMessage}</div>

}

export default whallMessage;
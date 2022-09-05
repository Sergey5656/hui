import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Sergey'},
        {id: 2, name: 'Caxffa'},
        {id: 3, name: 'NiceMan'},
        {id: 4, name: 'OrangeBoy'},
        {id: 5, name: 'Vorobey'},
        ]
    let dialogElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} />);

    let messagesData = [
        { id: 1, message: 'hi'},
        { id: 2, message: 'Give my Meat'},
        { id: 3, message: 'go go go'},
        { id: 4, message: 'gg'},
    ]

    let messageElements = messagesData.map( m => <Message message={m.message}  />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
             </div>
        </div>
    )
        }

export default Dialogs;
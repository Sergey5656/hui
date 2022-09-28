import React from 'react';
import {renderEntireTree} from "../render";


let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'hip', likesCount: 5},
            {id: 2, message: 'hap', likesCount: 5},
            {id: 3, message: 'bmw', likesCount: 5},
            {id: 4, message: 'range rover', likesCount: 5},
            {id: 5, message: 'mybach', likesCount: 777},
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Sergey'},
            {id: 2, name: 'Caxffa'},
            {id: 3, name: 'NiceMan'},
            {id: 4, name: 'OrangeBoy'},
            {id: 5, name: 'Vorobey'},
        ],
        messages: [
            {id: 1, message: 'hi'},
            {id: 2, message: 'Give my Meat'},
            {id: 3, message: 'go go go'},
            {id: 4, message: 'gg'},
        ],
    },
}
export let addPost = (postMessage) => {
    let newPost = {
        id:5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);

    renderEntireTree(state);
}

export default state;
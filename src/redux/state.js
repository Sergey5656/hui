import React from 'react';

let renderEntireTree = () => {
    console.log('stste');
}

let state = {
    profilePage: {
        newPostText: 'somov.s001',
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
export const addPost = (postMessage) => {
    let newPost = {
        id:5,
        message: postMessage,
        likesCount: 100
    };
    console.log(state)

    state.profilePage.posts.push(newPost);

    renderEntireTree(state);
}
export const updateNewPostText = (newText) => {

    state.profilePage.newPostText=newText;

    renderEntireTree(state);
}
export const subscribe = (observer) => {
    renderEntireTree = observer;
}
export default state;
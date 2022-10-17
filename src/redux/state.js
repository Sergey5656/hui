let store = {
    _state: {
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
    },
    _callSubscriber () {
        console.log('stste');
    },

    getState () {
     return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    addPost (postMessage) {
        let newPost = {
            id:5,
            message: postMessage,
            likesCount: 100
        };

        this._state.profilePage.posts.push(newPost);

        this._callSubscriber(this._state);
    },
    updateNewPostText (newText) {

        this.profilePage.newPostText=newText;

        this._callSubscriber(this._state);
},
    dispatch (action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
            id:5,
            message: postMessage,
            likesCount: 100

        };
            this._state.profilePage.posts.push(newPost);

            this._callSubscriber(this._state);

        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText=action.newText;

            this._callSubscriber(this._state);
        }
    }

}

export default store;
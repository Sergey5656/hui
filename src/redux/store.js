import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
            newMessageBody: ""
        },
        sidebarPage: {},
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);
        this._callSubscriber(this._state);

        }

}



export default store;
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    newPostText: 'somov.s001',
    posts: [
        {id: 1, message: 'hip', likesCount: 5},
        {id: 2, message: 'hap', likesCount: 5},
        {id: 3, message: 'bmw', likesCount: 5},
        {id: 4, message: 'range rover', likesCount: 5},
        {id: 5, message: 'mybach', likesCount: 777},
    ],
}

const profileReducer = (state=initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 100
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }

}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostActionCreator = (text) => ({

    type: UPDATE_NEW_POST_TEXT, newText: text})


export default profileReducer;
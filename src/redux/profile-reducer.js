const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {
    newPostText: 'somov.s001',
    posts: [
        {id: 1, message: 'hip', likesCount: 5},
        {id: 2, message: 'hap', likesCount: 5},
        {id: 3, message: 'bmw', likesCount: 5},
        {id: 4, message: 'range rover', likesCount: 5},
        {id: 5, message: 'mybach', likesCount: 777},
    ],
    profile: null,
}

const profileReducer = (state=initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 100
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
    case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }

}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostActionCreator = (text) => ({

    type: UPDATE_NEW_POST_TEXT, newText: text})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export default profileReducer;
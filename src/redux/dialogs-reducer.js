const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
}


const dialogsReducer = (state=initialState, action) => {


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 777, message: body});
            return state;
        default:
            return state;
    }

}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default dialogsReducer;
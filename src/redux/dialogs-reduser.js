const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE ";

let initialState = {
    dialogsData: [
        { id: 0, name: "Dima" },
        { id: 1, name: "Ivan" },
        { id: 2, name: "Roma" },
        { id: 3, name: "Inna" },
        { id: 4, name: "Olha" }
    ],
    messagesData: [
        { id: 0, message: "Hi" },
        { id: 1, message: "How are you?" },
        { id: 2, message: "The weather is good!" },
        { id: 3, message: "The weather so good!" },
        { id: 4, message: "The weather is cool!" }
    ],
    newMessageBody: ""
}

let dialogsReduser = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;

        case SEND_MESSAGE :
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
    
}
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => 
        ({  type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReduser;
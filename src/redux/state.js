const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE ";

let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 0, message: "Hi how are you?", likesCount: 12 },
                { id: 1, message: "Hello world", likesCount: 1 },
                { id: 2, message: "Hi how are you?", likesCount: 2 },
                { id: 3, message: "Hello world", likesCount: 33 }
            ],
            newPostText: "Any text"
        },
        messages: {
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
        },
        sidebar: {}
    },


    _callSubscriber() {
        console.log('state changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messages.newMessageBody = action.body;
            this._callSubscriber(this._state)
        }else if (action.type === SEND_MESSAGE) {
            let body = this._state.messages.newMessageBody;
            this._state.messages.newMessageBody = '';
            this._state.messages.messagesData.push({id: 6, message: body});
            this._callSubscriber(this._state)
        }
    }
}


export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => 
    ({  type: UPDATE_NEW_POST_TEXT, newText: text});

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => 
        ({  type: UPDATE_NEW_MESSAGE_BODY, body: body});

        
window.store = store;
export default store;

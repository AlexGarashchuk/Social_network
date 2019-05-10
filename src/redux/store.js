// import profileReduser from "./profile-reduser";
// import dialogsReduser from "./dialogs-reduser";


// let store = {
//     _state: {
//         profilePage: {
//             postsData: [
//                 { id: 0, message: "Hi how are you?", likesCount: 12 },
//                 { id: 1, message: "Hello world", likesCount: 1 },
//                 { id: 2, message: "Hi how are you?", likesCount: 2 },
//                 { id: 3, message: "Hello world", likesCount: 33 }
//             ],
//             newPostText: "Any text"
//         },
//         messages: {
//             dialogsData: [
//                 { id: 0, name: "Dima" },
//                 { id: 1, name: "Ivan" },
//                 { id: 2, name: "Roma" },
//                 { id: 3, name: "Inna" },
//                 { id: 4, name: "Olha" }
//             ],
//             messagesData: [
//                 { id: 0, message: "Hi" },
//                 { id: 1, message: "How are you?" },
//                 { id: 2, message: "The weather is good!" },
//                 { id: 3, message: "The weather so good!" },
//                 { id: 4, message: "The weather is cool!" }
//             ],
//             newMessageBody: ""
//         },
//         sidebar: {}
//     },


//     _callSubscriber() {
//         console.log('state changed');
//     },
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },

//     dispatch(action) {
//         this._state.profilePage = profileReduser(this._state.profilePage, action)
//         this._state.messages = dialogsReduser(this._state.messages, action)
//         this._callSubscriber(this._state);
//     }
// }


        
// window.store = store;
// export default store;

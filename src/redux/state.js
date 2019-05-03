let store = {
    _state: {
        profilePage: {
            postsData: [
                {id:0, message:"Hi how are you?", likesCount:12},
                {id:1, message:"Hello world", likesCount:1},
                {id:2, message:"Hi how are you?", likesCount:2},
                {id:3, message:"Hello world", likesCount:33}
            ],
            newPostText: "it-camasutra.com"
        },
        messages:{
            dialogsData: [
                {id:0, name: "Dima"},
                {id:1, name: "Ivan"},
                {id:2, name: "Roma"},
                {id:3, name: "Inna"},
                {id:4, name: "Olha"}
            ],
            messagesData: [
                {id:0, message: "Hi"},
                {id:1, message: "How are you?"},
                {id:2, message: "The weather is good!"},
                {id:3, message: "The weather so good!"},
                {id:4, message: "The weather is cool!"}
            ]
        }  
},
_callSubscriber() {
    console.log('state changed');
},
getState() {
    return this._state;
},
subscribe (observer) {
    this._callSubscriber = observer;
},
// addPost () {
//     let newPost = {
//         id: 5,
//         message: this._state.profilePage.newPostText,
//         likesCount: 0
//     };
//     this._state.profilePage.postsData.push(newPost);
//     this._state.profilePage.newPostText = '';
//     this._callSubscriber(this._state);
// },
// updateNewPostText (newPostText) {
//     this._state.profilePage.newPostText = newPostText;
//     this._callSubscriber(this._state);
// },
dispatch(action){
    if (action.type === "ADD-POST"){
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    }else if (action.type === "UPDATE-NEW-POST-TEXT"){
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
    }
}
}


window.store = store;
export default store;

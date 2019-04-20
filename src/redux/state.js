import {rerenderEntireTree} from '../render';

let state ={
    profile:{
        postsData: [
            {id:0, message:"Hi how are you?", likesCount:12},
            {id:1, message:"Hello world", likesCount:1},
            {id:2, message:"Hi how are you?", likesCount:2},
            {id:3, message:"Hello world", likesCount:33}
        ]
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
    
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };

    state.profile.postsData.push(newPost);
    rerenderEntireTree(state);
}


export default state;
import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";


const initialState = [
    {id:'1',
     title: 'Learning Redux Toolkit',
     content:"I've been good.",
     date: sub(new Date(), {minutes: 10}).toISOString(),
     reactions:{
        thumbsUp:0,
        wow:0,
        heart:0,
        rocket:0,
        coffee:0
     },
    },

    {id:'2',
     title: 'Learning this Redux Toolkit',
     content:"is too damn hard.",
     date: sub(new Date(), {minutes: 22}).toISOString(),
     reactions:{
        thumbsUp:0,
        wow:0,
        heart:0,
        rocket:0,
        coffee:0
     },
}
]

const postsSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{
        postAdded:{
            reducer(state, action){
            state.push(action.payload) // in  react usually push will mutate the state if it gets done likes this but not in redux thanks to immer.js that in behing the reduxjs but it will only work in the createSlice.
            },
            prepare(title, content, userId){  // a prepare callback can generate a unique id , format data, return object with payload
                return{
                    payload:{
                        id:nanoid(),
                        title, 
                        content,
                        date:new Date().toISOString(),
                        userId,
                        reactions:{
                            thumbsUp:0,
                            wow:0,
                            heart:0,
                            rocket:0,
                            coffee:0
                         },
                    }
                }   

         }
    },
    reactionAdded(state, action){     // this will be aor new reducer
        const {postId, reaction} = action.payload
        const existingPost= state.find(post => post.id === postId)
        if (existingPost){
            existingPost.reactions[reaction]++
        }
    }

}
});

export const selectAllPosts = (state) => state.posts; // this is used so when the chape of the state ever changes it will only change in the slice and not in every component. 

export const {postAdded, reactionAdded} = postsSlice.actions // here is where we export all the actions. 

export default postsSlice.reducer
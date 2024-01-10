import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = [
    {id:'1', title: 'Learning Redux Toolkit', content:"I've been good."},
    {id:'2', title: 'Learning this Redux Toolkit', content:"is too damn hard."}
]

const postsSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{
        postAdded:{
            reducer(state, action){
            state.push(action.payload) // in  react usually push will mutate the state if it gets done likes this but not in redux thanks to immer.js that in behing the reduxjs but it will only work in the createSlice.
            },
            prepare(title, content){  // a prepare callback can generate a unique id , format data, return object with payload
                return{
                    payload:{
                        id:nanoid(),
                        title, 
                        content
                    }
                }
            }   

        }
    }
})

export const selectAllPosts = (state) => state.posts; // this is used so when the chape of the state ever changes it will only change in the slice and not in every component. 

export const {postAdded} = postsSlice.actions // here is where we export all the actions. 

export default postsSlice.reducer
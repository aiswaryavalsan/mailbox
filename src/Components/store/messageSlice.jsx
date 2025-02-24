import { createSlice } from "@reduxjs/toolkit";

const initialState={messages:[],sender:''}
const messageSlice=createSlice({
    name:'message Slice',
    initialState,
    reducers:{
        addMessage:(state,action)=>{
            state.messages=[...state.messages,action.payload]

        }

    }  
})
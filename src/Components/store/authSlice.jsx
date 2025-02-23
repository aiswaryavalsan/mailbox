import { createSlice } from "@reduxjs/toolkit";
const initialState={token:'' ,email:'',isLoggedIn:false}
const AuthSliceReducer=createSlice({
    name:'authentication',
    initialState,
    reducers:{
        loginHandler:(state,action)=>{
            state.isLoggedIn=true;
            state.token=action.payload.token;
            state.email=action.payload.email;
        },
        logoutHandler:(state)=>{
            state.isLoggedIn=false;
            state.email='';
            state.token='';
        }

    }
})
export default AuthSliceReducer.reducer;
export const authActions=AuthSliceReducer.actions;
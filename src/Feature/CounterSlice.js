import { createSlice } from "@reduxjs/toolkit";

const CounterSlice=createSlice({
    name:"cartCounter",
    initialState:{
        value:0
    },
    reducers:{
        inc:(state,action)=>{
            state.value++
        }
    }
})

export const {inc}=CounterSlice.actions;

export default CounterSlice.reducer
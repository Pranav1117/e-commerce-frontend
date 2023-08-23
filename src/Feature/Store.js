import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from './CounterSlice'
const Store=configureStore({
    reducer:{
        slice:CounterSlice ,
    }
})

export default Store
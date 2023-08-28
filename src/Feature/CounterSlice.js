import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "cartCounter",
  initialState: {
    items: 0,
    loggedIn: null,
    name: null,
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setLoggedInStatus: (state, action) => {
      state.loggedIn = action.payload;
    },
    setName1: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setItems, setLoggedInStatus, setName1 } = CounterSlice.actions;

export default CounterSlice.reducer;

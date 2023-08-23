import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "cartCounter",
  initialState: {
    value: 0,
  },
  reducers: {
    inc: (State, action) => {
      State.value++;
    },
  },
});

export const { inc } = CounterSlice.actions;
export default CounterSlice.reducer;

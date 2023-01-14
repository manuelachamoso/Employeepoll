import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAnswered: false,
};

const answeredSlice = createSlice({
  name: "currentAnswer",
  initialState,
  reducers: {
    toggleAnswered: (state, action) => {
      state.isAnswered = !state.isAnswered;
    },
  },
});

export const { toggleAnswered } = answeredSlice.actions;

export default answeredSlice.reducer;

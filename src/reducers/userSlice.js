import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { _getUsers } from "../features/_DATA";

const initialState = {
  currentUser: "",
  isLoadingUser: false,
  isLoadingUsers: false,
  users: [],
  currUserQuestions: [],
};

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  let res = await _getUsers().then((value) => {
    return value;
  });

  return res;
});

export const saveUser = createAsyncThunk(
  "user/saveUser",
  async (user) => {
    let res = await _getUsers().then((value) => {
      return value;
    });

    let response = { newuser: res[user.id], users: res };
    return response;
  }
);
const userSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.currentUser = payload;
    },
    getCurrentUser: (state, { payload }) => {
      state.currentUser = payload;
    },
    setUsers: (state, { payload }) => {
      state.users = payload;
    },
  },
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.isLoadingUsers = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.isLoadingUsers = false;

      state.users = action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      state.isLoadingUsers = false;
    },

    [saveUser.pending]: (state) => {
      state.isLoadingUser = true;
    },
    [saveUser.fulfilled]: (state, action) => {
      state.isLoadingUser = false;
    },
    [saveUser.rejected]: (state, action) => {
      state.isLoadingUser = false;
    },
  },
});

export const { setUser, setUsers } = userSlice.actions;

export default userSlice.reducer;


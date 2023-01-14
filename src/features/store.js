import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "../reducers/userSlice";
import currentAnsweredReducer from "../reducers/answeredSlice";
import allQuestionsReducer from "../reducers/questionsSlice";

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    currentAnswered: currentAnsweredReducer,
    
    questions: allQuestionsReducer,
  },
});




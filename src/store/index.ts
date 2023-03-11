import { configureStore, combineReducers } from '@reduxjs/toolkit';

import feedbackSlice from './reducers/feedbackReducer';
import notificationSlice from './reducers/notificationReducer';
import popupSlice from './reducers/popupReducer';


const rootReducer = combineReducers({
  feedback: feedbackSlice,
  notification: notificationSlice,
  popup: popupSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IFeedbackModel } from '../../interfaces/apiModels.types';
import { IFeedback } from '../../interfaces/reducers.types';


const initialState: IFeedback = {
  feedback: null,
};

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    setFeedback(state, action: PayloadAction<IFeedbackModel>) {
      state.feedback = action.payload;
    },
    clearFeedback(state) {
      state.feedback = null;
    },
  },
});

export default feedbackSlice.reducer;
export const { setFeedback, clearFeedback } = feedbackSlice.actions;

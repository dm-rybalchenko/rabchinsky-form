import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { INotification } from '../../interfaces/reducers.types';


const initialState: INotification = {
  error: null,
  success: null,
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
    showSuccess(state, action: PayloadAction<string>) {
      state.success = action.payload;
    },
    clearSuccess(state) {
      state.success = null;
    },
  },
});

export default notificationSlice.reducer;
export const {
  showError, clearError, showSuccess, clearSuccess,
} = notificationSlice.actions;

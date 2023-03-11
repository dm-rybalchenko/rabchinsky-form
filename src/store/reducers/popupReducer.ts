import { createSlice } from '@reduxjs/toolkit';

import { IPopup } from '../../interfaces/reducers.types';


const initialState: IPopup = {
  popup: false,
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    showPopup(state) {
      state.popup = true;
    },
    closePopup(state) {
      state.popup = false;
    },
  },
});

export default popupSlice.reducer;
export const { closePopup, showPopup } = popupSlice.actions;

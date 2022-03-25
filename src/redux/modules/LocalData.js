import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  linkData: {},
  folderData: {},
};

export const localDataSlice = createSlice({
  name: "localData",
  initialState,
  reducers: {
    sendFolderDataToLocal: (state, action) => {
      state.folderData = action.payload;
    },
    sendLinkDataToLocal: (state, action) => {
      state.linkData = action.payload;
    },
  },
  extraReducers: {},
});

export const { sendFolderDataToLocal, sendLinkDataToLocal } =
  localDataSlice.actions;

export default localDataSlice.reducer;

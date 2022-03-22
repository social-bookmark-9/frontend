import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articleData: {},
  folderData: {},
};

export const localDataSlice = createSlice({
  name: "localData",
  initialState,
  reducers: {
    sendToHashtags: (state, action) => {
      state.linkData = action.payload.linkData;
      state.folderData = action.payload.folderData;
    },
  },
  extraReducers: {},
});

export const { sendToHashtags } = localDataSlice.actions;

export default localDataSlice.reducer;

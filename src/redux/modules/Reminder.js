import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import reminderApi from "../app/reminderApi";
import { setFolder } from "./Folder";

const ReminderApi = new reminderApi();

const initialState = {
  remindData:[]
};

export const getReminderAxios = createAsyncThunk(
  "reminder/getReminderAxios",
  async () => {
    const res = await ReminderApi.getReminder();
    return res.data;
  },
);

export const postReminderAxios = createAsyncThunk(
  "reminder/postReminderAxios",
  async (remindData) => {
    const res = await ReminderApi.postReminder(remindData);
    return res;
  }
)

export const patchReminderAxios = createAsyncThunk(
  "reminder/patchReminderAxios",
  async (remindData) => {
    const res = await ReminderApi.patchReminder(remindData);
    return res;
  }
)

export const deleteReminderAxios = createAsyncThunk(
  "reminder/deleteReminderAxios",
  async (remindData) => {
    const res = await ReminderApi.deleteReminder(remindData);
    return res;
  }
)


// export const editProfileHashtagAxios = createAsyncThunk(
//   "profile/editProfileHashtagAxios",
//   async hashTag => {
//     const res = await ProfileApi.editProfileHashtag(hashTag);
//     return res;
//   },
// );

export const reminderSlice = createSlice({
  name: "reminder",
  initialState,
  reducers: {
    setReminder: (state, action) => {
      console.log(state);
      console.log(action.payload);
    },
  },
  extraReducers: {
    [getReminderAxios.fulfilled]: (state, action) => {
      state.remindData = action.payload;
    },
  },
});

export const { setReminder } = reminderSlice.actions;
export default reminderSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import mainReducer from "./modules/Main";
import userReducer from "./modules/User";
import searchReducer from "./modules/Search";
import folderReducer from "./modules/Folder";
import profileReducer from "./modules/Profile";
import articleReducer from "./modules/Article";
import reminderReducer from "./modules/Reminder";
import localDataReducer from "./modules/LocalData";

export const store = configureStore({
  reducer: {
    main: mainReducer,
    user: userReducer,
    search: searchReducer,
    folder: folderReducer,
    profile: profileReducer,
    article: articleReducer,
    reminder: reminderReducer,
    localData: localDataReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

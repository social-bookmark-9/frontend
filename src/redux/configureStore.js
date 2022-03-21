import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import userReducer from "./modules/User";
import articleReducer from "./modules/Article";
import folderReducer from "./modules/Folder";
import profileReducer from "./modules/Profile";

export const store = configureStore({
  reducer: {
    user: userReducer,
    article: articleReducer,
    folder: folderReducer,
    profile: profileReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

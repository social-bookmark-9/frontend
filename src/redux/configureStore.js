import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import userReducer from "./modules/User";
import articleReducer from "./modules/Article";
import folderReducer from "./modules/Folder";
import profileReducer from "./modules/Profile";
import localDataReducer from "./modules/LocalData";
import mainReducer from "./modules/Main";

export const store = configureStore({
  reducer: {
    main: mainReducer,
    user: userReducer,
    article: articleReducer,
    folder: folderReducer,
    profile: profileReducer,
    localData: localDataReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

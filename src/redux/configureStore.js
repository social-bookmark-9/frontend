import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import userReducer from "./modules/User";
import articleReducer from "./modules/Article";

export const store = configureStore({
  reducer: {
    user: userReducer,
    article: articleReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

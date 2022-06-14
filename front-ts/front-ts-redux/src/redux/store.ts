import { rankingDataSlice } from "./rankingSlice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: combineReducers({ ranking: rankingDataSlice.reducer }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

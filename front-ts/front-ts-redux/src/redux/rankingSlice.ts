import { createSlice } from "@reduxjs/toolkit";

import { RankingData } from "../types/type";
import { ranking } from "./fetch";

const initialState: RankingData = {
  ranking: [],
};

export const rankingDataSlice = createSlice({
  name: "rankingData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ranking.pending, () => {
        //非同期処理中のロジック
      })
      .addCase(ranking.fulfilled, (state, { payload }) => {
        //非同期処理成功時のロジック
        state.ranking = payload;
      })
      .addCase(ranking.rejected, (error) => {
        //非同期処理失敗時のロジック
        error;
      });
  },
});

import { createAsyncThunk } from "@reduxjs/toolkit";

export const ranking = createAsyncThunk("rankingData", async () => {
  const response = await fetch("http://localhost:3000/ranking");
  const rankingData = await response.json();
  return rankingData;
});

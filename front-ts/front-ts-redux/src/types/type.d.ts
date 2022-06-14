import { AnyAction } from "@reduxjs/toolkit";

export interface Ranking {
  word: string;
  count: number;
}
export interface RankingData {
  ranking?: Ranking[];
}

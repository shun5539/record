import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { RankingData } from "../types/type";

export const Content: FC<RankingData> = () => {
  const { ranking } = useSelector((state: RootState) => state.ranking);
  if (!ranking) throw new Error("rankingがありません");

  return (
    <>
      <h1>Hello Hello</h1>
      <table>
        <tr>
          {ranking.map(({ word }) => {
            return (
              <tr>
                <td key={word}>{word}</td>
              </tr>
            );
          })}
        </tr>
      </table>
    </>
  );
};

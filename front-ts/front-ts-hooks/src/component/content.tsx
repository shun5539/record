import React, { FC } from "react";
import { RankingData } from "../types/type";

export const Content: FC<RankingData> = (props) => {
  const { ranking } = props;
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

import React, { FC } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { CostGraphProps } from "../types/type";

export const CostGraph: FC<CostGraphProps> = (props) => {
  const { costGraphData } = props;

  return (
    <>
      <LineChart
        width={730}
        height={250}
        data={costGraphData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="cost" stroke="#8884d8" />
      </LineChart>
    </>
  );
};

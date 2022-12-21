import React, { useEffect, useState } from "react";
import { Chart, ChartOptions, registerables } from "chart.js";
import { Bubble } from "react-chartjs-2";
import { Mapping } from "./types/type";

Chart.register(...registerables);

const App = () => {
  const [mapping, setRanking] = useState<Mapping[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/datasets");
      const mappingData = await response.json();
      setRanking(mappingData);
    };
    fetchData();
  }, []);

  const datasets = mapping.map((value) => {
    const img = new Image();
    img.src = value.pointStyle;
    img.width = 80;
    img.height = 80;
    return {
      data: [
        {
          x: value.ctr,
          y: value.cvr,
        },
      ],
      pointStyle: img,
    };
  });

  const data = {
    datasets,
  };

  const options: ChartOptions<"bubble"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bubble Chart",
      },
    },
  };

  return (
    <>
      <h1>マッピング</h1>
      <Bubble options={options} data={data} />
    </>
  );
};
export default App;

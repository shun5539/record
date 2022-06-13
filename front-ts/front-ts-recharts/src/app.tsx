import React, { useEffect, useState } from "react";
import { CostGraph } from "./component/graph";

import { CostGraphData } from "./types/type";

const App = () => {
  const [graphData, setGraphData] = useState<CostGraphData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/costGraphData");
      const data = await response.json();
      setGraphData(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>Hello World</h1>
      <CostGraph costGraphData={graphData} />
    </>
  );
};
export default App;

import React, { FC, useEffect, useState } from "react";
import { Content } from "./component/content";
import { Ranking } from "./types/type";

const App: FC = () => {
  const [ranking, setRanking] = useState<Ranking[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/ranking");
      const rankingData = await response.json();
      setRanking(rankingData);
      //今回はブラウザ上でデータが入ってきているか確認するためconsoleを記載
      console.log(rankingData);
    };
    fetchData();
  }, []);
  return (
    <>
      <Content ranking={ranking} />
    </>
  );
};
export default App;

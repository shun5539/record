import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import { Content } from "./component/content";
import { ranking } from "./redux/fetch";

const App: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ranking());
  }, []);
  return (
    <>
      <Content />
    </>
  );
};
export default App;

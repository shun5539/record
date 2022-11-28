import React, { useState } from "react";
import Select from "react-select";

const App = () => {
  const [keyword, setKeyword] = useState<OptionType[]>([]);
  const onChange = (value: any): void => {
    setKeyword(value);
  };
  const select = [
    { value: "chocolate", label: "チョコレート" },
    { value: "strawberry", label: "イチゴ" },
    { value: "vanilla", label: "バニラ" },
  ];
  return (
    <>
      <h1>Hello World</h1>
      <Select
        options={select}
        // 複数選択
        isMulti
        // 検索可
        isSearchable
        defaultValue={keyword}
        onChange={onChange}
        placeholder="アイス"
      />
    </>
  );
};
export default App;

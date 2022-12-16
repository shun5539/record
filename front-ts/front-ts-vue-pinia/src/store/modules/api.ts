import { defineStore } from "pinia";

const fetchData = async () => {
  const response = await fetch(`http://localhost:3000/costGraphData`);
  return await response.json();
};

const data = await fetchData();

export const useAppStore = defineStore("api", {
  state: () => ({
    data: data,
  }),
});

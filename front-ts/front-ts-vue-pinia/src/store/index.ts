import { useAppStore } from "./modules/api";

const useStore = () => ({
  api: useAppStore(),
});

export default useStore;

import { setListInsight } from "./Reducer";

const getInsight = async (store) => {
  store.dispatch(setListInsight);
};

const Action = {
  getInsight,
};

export default Action;

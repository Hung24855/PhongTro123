import rootReducer from "./store/reducers/rootReducer";
import { persistStore } from "redux-persist";
import { createStore } from "redux";

const reduxStore = () => {
  const store = createStore(rootReducer),
    persistor = persistStore(store);
  return {
    persistor,
    store,
  };
};

export default reduxStore;

import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";

//* OUR CUSTOM MIDDLEWAREE TO ADD CUSTOM LOGGER (curried function)
const myLogger = (store) => (next) => (action) => {
  console.log(`Action: ${JSON.stringify(action)}`);
  console.log(`Previous State: ${JSON.stringify(store.getState())}`);

  const updatedState = [action].reduce(rootReducer, store.getState());
  console.log(`Updated State: ${JSON.stringify(updatedState)}`);

  //* pass action
  return next(action);
};

const store = createStore(rootReducer, applyMiddleware(myLogger));

export default store;

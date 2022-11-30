import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import reducers from "./reducers";

const logger = createLogger();
const store = createStore(reducers, applyMiddleware(logger));

export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import stepSlice from "./reducers/themeReducer";
// export default configureStore({
//   reducer: {
//     step: stepSlice.reducer
//   }
// });

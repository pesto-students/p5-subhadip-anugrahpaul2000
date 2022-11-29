import { createStore } from "redux";
import { lightReducer } from "./reducers";

export const store = createStore(lightReducer);

// Imports: Dependencies
import { combineReducers } from "redux";

// Imports: Reducers
import sankeyDataReducer from "./sankeyDataReducer";
import loaderReducer from "./loaderReducer";
import errorReducer from "./errorReducer";

// Redux: Root Reducer
const rootReducer = combineReducers({
  sankeyDataReducer: sankeyDataReducer,
  errorReducer: errorReducer,
  loaderReducer: loaderReducer,
});

// Exports
export default rootReducer;

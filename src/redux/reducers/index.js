// Imports: Dependencies
import { combineReducers } from "redux";

// Imports: Reducers
import sankeyDataReducer from "./sankeyDataReducer";
import loaderReducer from "./loaderReducer";
import errorReducer from "./errorReducer";
import i18nReducer from "./i18nReducer";

// Redux: Root Reducer
const rootReducer = combineReducers({
  sankeyDataReducer: sankeyDataReducer,
  errorReducer: errorReducer,
  loaderReducer: loaderReducer,
  i18nReducer: i18nReducer,
});

// Exports
export default rootReducer;

import { handleActions } from "redux-actions";
import ActionTypes from "../actions/actionTypes";

const defaultState = {
  language: "en",
};

const sankeyDataReducer = handleActions(
  {
    [ActionTypes.toggleLanguageAction]: (state = defaultState, action) => ({
      language: state.language === "en" ? "de" : "en",
    }),
  },

  defaultState
);

export default sankeyDataReducer;

import { handleActions } from "redux-actions";
import ActionTypes from "../actions/actionTypes";

const defaultState = [];

const sankeyDataReducer = handleActions(
  {
    [ActionTypes.getSankeyDataSuccess]: (state, action) => [
      ...state,
      ...action.payload,
    ],
  },

  defaultState
);

export default sankeyDataReducer;

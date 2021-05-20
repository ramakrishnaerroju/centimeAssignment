import { handleActions } from "redux-actions";
import { getSankeyDataSuccess } from "../actions/actionTypes";

const defaultState = [];

const sankeyDataReducer = handleActions(
  {
    [getSankeyDataSuccess]: (state, action) => [...state, ...action.payload],
  },

  defaultState
);

export default sankeyDataReducer;

import {
  SAGA_IN_PROGRESS_SUFFIX,
  SAGA_COMPLETE_SUFFIX,
  SAGA_ERROR_SUFFIX,
} from "../../common/commonActionTypes";

/**
 *  from https://medium.com/stashaway-engineering/react-redux-tips-better-way-to-handle-loading-flags-in-your-reducers-afda42a804c6
 */
const loaderReducer = (state = {}, action) => {
  const matches = new RegExp(
    `(.*)_(${SAGA_IN_PROGRESS_SUFFIX}|${SAGA_COMPLETE_SUFFIX}|${SAGA_ERROR_SUFFIX})`
  ).exec(action.type);
  if (matches) {
    const [, requestName, requestState] = matches;
    return {
      ...state,
      [requestName]: requestState === SAGA_IN_PROGRESS_SUFFIX,
    };
  }
  return state;
};

export default loaderReducer;

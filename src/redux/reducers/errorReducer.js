import {
  SAGA_REQUEST_SUFFIX,
  SAGA_ERROR_SUFFIX,
  SAGA_CLEAR_SUFFIX,
} from "../../common/commonActionTypes";

const ErrorReducer = (state = {}, action) => {
  const matches = new RegExp(
    `(.*)_(${SAGA_REQUEST_SUFFIX}|${SAGA_ERROR_SUFFIX}|${SAGA_CLEAR_SUFFIX})`
  ).exec(action.type);

  if (matches) {
    const [, requestName, requestState] = matches;

    return {
      ...state,
      [requestName]: requestState === SAGA_ERROR_SUFFIX ? action.payload : "",

      [`${requestName}_CODE`]:
        requestState === SAGA_ERROR_SUFFIX ? action.payload : "",
    };
  }

  return state;
};

export default ErrorReducer;

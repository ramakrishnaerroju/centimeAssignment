import { createAction } from "redux-actions";
import {
  SAGA_REQUEST_SUFFIX,
  SAGA_COMPLETE_SUFFIX,
  SAGA_CLEAR_SUFFIX,
  SAGA_ERROR_SUFFIX,
} from "../../common/commonActionTypes";

// get data
export const getSankeyDataProcess = "USER_GET_CATEGORIES_PROCESS";
export const getSankeyDataProcessRequest = createAction(
  `${getSankeyDataProcess}_${SAGA_REQUEST_SUFFIX}`
);
export const getSankeyDataProcessComplete = createAction(
  `${getSankeyDataProcess}_${SAGA_COMPLETE_SUFFIX}`
);
export const getSankeyDataProcessClear = createAction(
  `${getSankeyDataProcess}_${SAGA_CLEAR_SUFFIX}`
);
export const getSankeyDataProcessError = createAction(
  `${getSankeyDataProcess}_${SAGA_ERROR_SUFFIX}`
);

/*
 * API Success Responses
 */
export const getSankeyDataSuccess = createAction("GET_SANKEY_DATA_SUCCESS");

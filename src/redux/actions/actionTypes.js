import { createAction } from "redux-actions";
import {
  SAGA_REQUEST_SUFFIX,
  SAGA_COMPLETE_SUFFIX,
  SAGA_CLEAR_SUFFIX,
  SAGA_ERROR_SUFFIX,
} from "../../common/commonActionTypes";

// get data
const getSankeyDataProcess = "USER_GET_CATEGORIES_PROCESS";
const getSankeyDataProcessRequest = createAction(
  `${getSankeyDataProcess}_${SAGA_REQUEST_SUFFIX}`
);
const getSankeyDataProcessComplete = createAction(
  `${getSankeyDataProcess}_${SAGA_COMPLETE_SUFFIX}`
);
const getSankeyDataProcessClear = createAction(
  `${getSankeyDataProcess}_${SAGA_CLEAR_SUFFIX}`
);
const getSankeyDataProcessError = createAction(
  `${getSankeyDataProcess}_${SAGA_ERROR_SUFFIX}`
);

/*
 * API Success Responses
 */
const getSankeyDataSuccess = createAction("GET_SANKEY_DATA_SUCCESS");

/*
 * translation
 */

const toggleLanguageAction = createAction("TOGGLE_LANGUAGE");
const toggleLanguage = (language) => toggleLanguageAction(language);

const ActionTypes = {
  toggleLanguageAction,
  toggleLanguage,

  getSankeyDataProcess,
  getSankeyDataProcessRequest,
  getSankeyDataProcessError,
  getSankeyDataProcessClear,
  getSankeyDataProcessComplete,
  getSankeyDataSuccess,
};
export default ActionTypes;

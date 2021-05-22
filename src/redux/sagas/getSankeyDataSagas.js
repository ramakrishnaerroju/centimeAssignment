import { put, call, takeEvery, all } from "redux-saga/effects";
import ActionTypes from "../actions/actionTypes";
import { doSagaLifeCycle } from "../../common/sagaUtils";
import Service from "../../services/Service";

function* getSankeyDataSaga() {
  yield doSagaLifeCycle(ActionTypes.getSankeyDataProcess, function* () {
    try {
      const sankeyData = yield call(Service.getData);
      yield put(ActionTypes.getSankeyDataSuccess(sankeyData));
    } catch (error) {
      yield put(ActionTypes.getSankeyDataProcessError(error.message));
    }
  });
}

export function* getSankeyData() {
  yield takeEvery(ActionTypes.getSankeyDataProcessRequest, getSankeyDataSaga);
}
export function* sankeyDataSaga() {
  yield all([getSankeyData()]);
}

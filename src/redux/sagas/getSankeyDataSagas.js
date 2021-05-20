import { put, call, takeEvery, all } from "redux-saga/effects";
import {
  getSankeyDataProcessRequest,
  getSankeyDataProcess,
  getSankeyDataProcessError,
  getSankeyDataSuccess,
} from "../actions/actionTypes";
import { doSagaLifeCycle } from "../../common/sagaUtils";
import Service from "../../services/Service";

function* getSankeyDataSaga() {
  yield doSagaLifeCycle(getSankeyDataProcess, function* () {
    try {
      const sankeyData = yield call(Service.getData);
      yield put(getSankeyDataSuccess(sankeyData));
    } catch (error) {
      yield put(getSankeyDataProcessError(error.message));
    }
  });
}

export function* getSankeyData() {
  yield takeEvery(getSankeyDataProcessRequest, getSankeyDataSaga);
}
export function* sankeyDataSaga() {
  yield all([getSankeyData()]);
}

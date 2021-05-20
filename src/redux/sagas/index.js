import { getSankeyData } from "./getSankeyDataSagas";
import { fork, all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([fork(getSankeyData)]);
}

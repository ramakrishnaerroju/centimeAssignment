import { put } from "redux-saga/effects";
import Logger from "../logger/Logger";
import {
  SAGA_IN_PROGRESS_SUFFIX,
  SAGA_COMPLETE_SUFFIX,
  SAGA_ERROR_SUFFIX,
} from "./commonActionTypes";

function* sagaStart(processName, payload) {
  return yield put({
    type: `${processName}_${SAGA_IN_PROGRESS_SUFFIX}`,
    payload: payload || {},
  });
}

function* sagaComplete(processName, payload) {
  return yield put({
    type: `${processName}_${SAGA_COMPLETE_SUFFIX}`,
    payload: payload || {},
  });
}

function* sagaError(processName, error) {
  return yield put({
    type: `${processName}_${SAGA_ERROR_SUFFIX}`,
    payload: error || {},
  });
}

/**
 *
 * Saga life cycle events: REQUEST->IN_PROGRESS->COMPLETE||ERROR
 *
 * @param processName unique name prefix for the saga life cylce
 * @param sagaProcessGeneratorFunction specific saga logic generator function
 */
function* doSagaLifeCycle(processName, sagaProcessGeneratorFunction) {
  try {
    yield sagaStart(processName);
    yield sagaProcessGeneratorFunction();
    yield sagaComplete(processName);
  } catch (e) {
    Logger.info(
      `[sagaUtils] doSagaLifeCycle :: ${processName} :: ${JSON.stringify(e)}`
    );
    yield sagaError(processName, e);
  }
}

export { sagaStart, sagaComplete, sagaError, doSagaLifeCycle };

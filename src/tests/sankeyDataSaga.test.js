import { getSankeyDataSaga } from "../redux/sagas/sankeyDataSaga";
import ActionTypes from "../redux/actions/actionTypes";
import { runSaga } from "redux-saga";
import mockData from "./../assets/mock.json";

/**
 * For POST calls we need below mock adapter
 */
// import MockAdapter from "axios-mock-adapter";
// import { httpService } from "./../common/httpService";
// const mock = new MockAdapter(httpService.httpInstance);

test('should trigger an "GET_SANKEYDATA_PROCESS" action ', async () => {
  const dispatchedActions = [];

  await runSaga(
    {
      dispatch: (action) => dispatchedActions.push(action),
      getState: () => ({
        sankeyDataReducer: {
          data: mockData.data,
        },
      }),
    },
    getSankeyDataSaga,
    {}
  ).toPromise();
  console.log(dispatchedActions);
  expect(dispatchedActions.length).toEqual(3);
  expect(dispatchedActions[1].type).toEqual(
    ActionTypes.getSankeyDataSuccess.toString()
  );
  expect(dispatchedActions[1].payload).toEqual(mockData.data);
  expect(dispatchedActions[2].type).toEqual(
    ActionTypes.getSankeyDataProcessComplete.toString()
  );
});

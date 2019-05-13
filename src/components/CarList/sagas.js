import { call, put, takeLatest } from "redux-saga/effects";
import { types } from "./constants";
import { fetchCarsData } from "./services";

export function* fetchCarsDetails({startIndex, endIndex}) {
  const carsData = yield call(fetchCarsData, startIndex, endIndex);
  if (carsData && carsData.length > 0) {
    yield put({ type: types.LOAD_CARS_DATA, carsData });
  }
}

function* carSaga() {
  yield takeLatest(types.GET_CARS_DETAILS, fetchCarsDetails);
}

export default carSaga;
import { fork, all } from "redux-saga/effects";
import carSaga from "../components/CarList/sagas";

function* rootSaga() {
    yield all ([
        fork(carSaga)
    ]);
}

export default rootSaga;
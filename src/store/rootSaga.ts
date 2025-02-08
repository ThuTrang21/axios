import { all, call } from "redux-saga/effects";
import appSagas from "./app/sagas";


export default function* rootSaga() {
  yield all([
    call(appSagas),
  ]);
}

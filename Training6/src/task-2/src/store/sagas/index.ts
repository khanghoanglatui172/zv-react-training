import { all } from "redux-saga/effects";
import tasks from './tasks.saga'
import network from './network.saga'
const sagas = function* sagas() {
    yield all([tasks(), network()]);
};

export default sagas
import { all } from "redux-saga/effects";
import auth from "./auth";
import users from './users'
const sagas = function* sagas() {
    yield all([auth(), users()]);
};

export default sagas
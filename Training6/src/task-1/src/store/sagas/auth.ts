import {put, takeEvery} from "redux-saga/effects";
import axios from "axios";
import * as Effects from "redux-saga/effects";
import {base_url} from "../../App";
import {loginFail, loginSuccess, getUserDetailSuccess} from "../../reducers/auth.slice";
import { GET_USER_INFO_FETCH, LOGIN_FETCH} from "../actions/auth.action";
import {User} from "../../interfaces/user.interface";

const call: any = Effects.call;

const login = async (payload: { email: string, password: string }) => {
    const response = await axios.post(`${base_url}/login`, payload)
    return response.data;
}

const getDetail = async () => {
    const response = await axios.get(`${base_url}/api/users/my`, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access_token')
        }
    })

    return response.data
}

function* loginHandler(action: any) {
    try {
        const response: { token: string } = yield call(login, {
            ...action.payload,
        });
        yield put(loginSuccess(response.token));
        localStorage.setItem('access_token', response.token);
    } catch (e) {
        yield put(loginFail(e));
    }
}

function* getUserDetailHandler() {
    try {
        const response: User = yield call(getDetail);
        yield put(getUserDetailSuccess(response));
    } catch (e) {
    }
}

function* authSaga() {
    yield takeEvery(LOGIN_FETCH, loginHandler);
    yield takeEvery(GET_USER_INFO_FETCH, getUserDetailHandler);
}

export default authSaga
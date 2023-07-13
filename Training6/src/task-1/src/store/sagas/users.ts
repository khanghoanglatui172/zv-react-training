import {put, takeEvery} from "redux-saga/effects";
import axios from "axios";
import * as Effects from "redux-saga/effects";
import {base_url} from "../../App";
import {User} from "../../interfaces/user.interface";
import {
    getParticularUserDetailFail,
    getParticularUserDetailSuccess,
    getUserListFail,
    getUserListSuccess
} from "../../reducers/users.slice";
import {GET_PARTICULAR_USER_DETAIL_FETCH, GET_USER_LIST_FETCH} from "../actions/users.action";

const call: any = Effects.call;

const getUserList = async () => {
    const response = await axios.get(`${base_url}/api/users`, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access_token')
        }
    })
    console.log('hahaha', response.data)
    return response.data
}

const getUserDetailInList = (payload: { userList: User[], id: string }) => {
    const result = payload.userList.find((user) => user.id === payload.id)

    if (result) {
        return result
    } else
        return 'User not found'
}

function* getUserListHandler() {
    try {
        const response: {users: User[]} = yield call(getUserList);
        yield put(getUserListSuccess(response.users));
    } catch (e: any) {
        yield put(getUserListFail(e));
    }
}

function* getParticularUserDetailHandler(action: any) {
    try {
        const response: User = yield call(getUserDetailInList, {...action.payload});
        yield put(getParticularUserDetailSuccess(response));
    } catch (e: any) {
        yield put(getParticularUserDetailFail(e));
    }
}

function* usersSaga() {
    yield takeEvery(GET_USER_LIST_FETCH, getUserListHandler);
    yield takeEvery(GET_PARTICULAR_USER_DETAIL_FETCH, getParticularUserDetailHandler);
}

export default usersSaga
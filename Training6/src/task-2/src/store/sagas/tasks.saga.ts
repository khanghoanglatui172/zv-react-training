import * as Effects from "redux-saga/effects";
import {delay, fork, put, select, take, takeEvery, cancel} from "redux-saga/effects";
import {v4 as uuid} from 'uuid';
import {TASK_STATUSES} from "../../constant";
import {Task} from "../../interfaces/task.interface";
import {createTaskSuccess, readyTasks, submitTask, updateTaskStatusSuccess,} from "../../reducers/tasks.slice";
import {CREATE_TASK_REQUEST, UPDATE_TASK_STATUS_REQUEST} from "../actions/tasks.action";
import {setNetworkStatus} from "../../reducers/network.slice";

const call: any = Effects.call;

const createTask = (name: string) => {
    const id = uuid()
    const status = TASK_STATUSES.DRAFT
    return {id, name, status}
}

const updateTaskStatus = (payload: any) => {
    return payload
}

function* createTaskHandler(action: any) {
    const response: Task = yield call(createTask, action.payload)
    yield put(createTaskSuccess(response));
}

function* updateTaskStatusHandler(action: any) {
    const response: Task = yield call(updateTaskStatus, action.payload)
    yield put(updateTaskStatusSuccess(response));
}

function* changeStatusHandler(task: Task): any {
    yield put(updateTaskStatusSuccess({...task, status: TASK_STATUSES.SUBMITTING}));
    yield delay(2000);
    const status = Math.floor(Math.random() * 2) === 1 ? TASK_STATUSES.SUCCESS : TASK_STATUSES.ERROR;
    yield put(submitTask({...task, status: status}));
}

function* submitTaskHandler(): any {
    while (true) {
        const readyTasksList: Task[] = yield select(readyTasks);
        for (let i = 0; i < readyTasksList.length; i++) {
            yield call(changeStatusHandler, readyTasksList[i])
        }
    }
}

function* watchNetworkStatus(): any {
    let initNetworkStatus
    let runSubmitAuto = null
    while (true) {
        let network
        if (initNetworkStatus) {
            network = (yield take(setNetworkStatus.type)).payload
        } else {
            initNetworkStatus = true
            network = yield select(state => state.network.online)
        }
        if (network && !runSubmitAuto) {
            runSubmitAuto = yield fork(submitTaskHandler)
        } else {
            yield cancel(runSubmitAuto)
            runSubmitAuto = undefined
        }
    }
}

function* tasksSaga() {
    yield takeEvery(CREATE_TASK_REQUEST, createTaskHandler);
    yield takeEvery(UPDATE_TASK_STATUS_REQUEST, updateTaskStatusHandler);
    yield fork(watchNetworkStatus);
}

export default tasksSaga
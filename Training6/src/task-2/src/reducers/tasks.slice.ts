import {createSlice} from '@reduxjs/toolkit'
import {createSelector} from 'reselect'
import {Task} from "../interfaces/task.interface";
import {TASK_STATUSES} from "../constant";
import {RootState} from "../store";

interface TaskState {
    data: { [key: string]: Task },
    keys: string[],
    loading: boolean,
    error: any
}

const initialState: TaskState = {
    data: {},
    keys: [],
    loading: false,
    error: null,
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        createTaskRequest: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        createTaskSuccess: (state, action) => {
            state.loading = false;
            state.data[action.payload.id] = action.payload
            state.keys.push(action.payload.id);
            state.error = null;
        },
        updateTaskStatusRequest: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        updateTaskStatusSuccess: (state, action) => {
            state.loading = false;
            state.data[action.payload.id] = action.payload
            state.error = null;
        },
        getTaskFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        submitTask: (state, action) => {
            state.loading = false;
            state.data[action.payload.id] = action.payload
            state.error = null;
        },
    }
})

const {actions, reducer} = tasksSlice

export const {
    createTaskRequest,
    createTaskSuccess,
    updateTaskStatusRequest,
    updateTaskStatusSuccess,
    submitTask,
} = actions;

export const readyTasks = createSelector((state: RootState) => {
    return state.tasks
}, (taskState) => {
    const filteredTasks: Task[] = [];

    for (const key of taskState.keys) {
        if (taskState.data[key].status === TASK_STATUSES.READY || taskState.data[key].status === TASK_STATUSES.SUBMITTING)
            filteredTasks.push(taskState.data[key])
    }

    return filteredTasks
})

export default reducer
import {createAction} from "@reduxjs/toolkit";

export const CREATE_TASK_REQUEST = 'tasks/createTaskRequest'
export const CREATE_TASK_SUCCESS = 'tasks/createTaskSuccess'

export const createTaskRequest = createAction(CREATE_TASK_REQUEST);

export const createTaskSuccess = createAction(CREATE_TASK_SUCCESS);

export const UPDATE_TASK_STATUS_REQUEST = 'tasks/updateTaskStatusRequest'
export const UPDATE_TASK_STATUS_SUCCESS = 'tasks/updateTaskStatusSuccess'

export const updateTaskStatusRequest = createAction(UPDATE_TASK_STATUS_REQUEST);

export const updateTaskStatusSuccess = createAction(UPDATE_TASK_STATUS_SUCCESS);

export const SUBMIT_TASK = 'tasks/submitTask'

export const submitTask = createAction(SUBMIT_TASK);

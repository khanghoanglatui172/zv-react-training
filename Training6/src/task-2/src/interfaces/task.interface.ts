import {TASK_STATUSES} from "../constant";

export interface Task {
    id: string,
    name: string,
    status: TASK_STATUSES
}
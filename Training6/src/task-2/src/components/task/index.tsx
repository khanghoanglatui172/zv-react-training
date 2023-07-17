import React from 'react';
import {useDispatch} from "react-redux";
import {TASK_STATUSES} from "../../constant";
import {updateTaskStatusRequest} from "../../reducers/tasks.slice";

type TaskProps = {
    id: string,
    name: string,
    status: string
}

const Task = ({id, name, status}: TaskProps) => {
    const dispatch = useDispatch();
    const handleChangeTaskStatus = () => {
        if(status === TASK_STATUSES.DRAFT) {
            const data = {id: id, name: name, status: TASK_STATUSES.READY,}
            dispatch(updateTaskStatusRequest(data))
        } else if (status === TASK_STATUSES.ERROR) {
            const data = {id: id, name: name, status: TASK_STATUSES.SUBMITTING,}
            dispatch(updateTaskStatusRequest(data))
        }
    }

    return (
        <div className='task'>
            <p>{name}</p>
            <span style={{cursor: 'pointer'}} onClick={handleChangeTaskStatus}>{status.toUpperCase()}</span>
        </div>
    );
};

export default Task;
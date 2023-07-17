import React from 'react';
import AddTaskForm from "../../components/add-task-form";
import TaskComp from "../../components/task";
import NetworkStatus from "../../components/network-status";
import {useAppSelector} from "../../hooks/useAppSelector";
import {useDispatch} from "react-redux";
import {createTaskRequest} from "../../reducers/tasks.slice";

const AppPage = () => {
    const dispatch = useDispatch()
    const tasks = useAppSelector((state) => state.tasks.data)
    const networkStatus = useAppSelector((state) => state.network.online)

    const handleCreateTask = (name: string) => {
        dispatch(createTaskRequest(name))
    }

    const renderTasks = (data: any) => {
        return Object.keys(data).map((key) => (<TaskComp key={key} id={data[key].id} name={data[key].name} status={data[key].status}/>))
    }

    return (
        <div>
            <NetworkStatus isOnline={networkStatus}/>
            <AddTaskForm handleCreateTask={handleCreateTask}/>
            <div className='task-container'>
                {Object.keys(tasks).length  ? renderTasks(tasks) : <p>there is no task</p>}
            </div>
        </div>
    );
};

export default AppPage;
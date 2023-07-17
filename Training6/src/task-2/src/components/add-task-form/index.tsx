import React, {useRef} from 'react';

type AddTaskForm = {
    handleCreateTask: (name: string) => void
}

const AddTaskForm = ({handleCreateTask}: AddTaskForm) => {
    const taskRef = useRef<any>()

    return (
        <div className='add-form'>
            <input name='task' placeholder='type a task' ref={taskRef}/>
            <button onClick={() => handleCreateTask(taskRef.current.value)}>+ Add</button>
        </div>
    );
};

export default AddTaskForm;
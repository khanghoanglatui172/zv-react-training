import React, {useState} from 'react';

type AddTodoFormProps = {
    handleAddTodo: (data: string) => void
}

const AddTodoForm = ({handleAddTodo}: AddTodoFormProps) => {
    const [name, setName] = useState('');

    const onSubmit = (e:  React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddTodo(name);
    }

    return (
        <div>
            <form onSubmit={(e) => onSubmit(e)}>
                <input name='todo' value={name} onChange={(e) => setName(e.target.value)}
                       placeholder='what should be done?'/>
                <button type={"submit"}>Add</button>
            </form>
        </div>
    );
};

export default AddTodoForm;
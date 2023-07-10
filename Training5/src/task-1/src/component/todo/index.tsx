import React from 'react';

type TodoProps = {
    id: string,
    name: string,
    completed: boolean,
    handleDelete: (id: string) => void,
    handleCompleteOrIncomplete: (id: string, todoStatus: boolean) => void
}

const Todo = ({id, name, completed, handleDelete, handleCompleteOrIncomplete}: TodoProps) => {
    return (
        <div className="todo" style={{backgroundColor: `${completed ? '#5ced83' : '#ed8a82'}`, borderColor: `${completed ? '#13d944' : '#e33b31'}`}}>
            <p>{name}</p>
            <div>
                <button onClick={() => handleCompleteOrIncomplete(id, completed)}>{completed ? '↻': '✓'}</button>
                <button onClick={() => handleDelete(id)}>〤</button>
            </div>
        </div>
    );
};

export default Todo;
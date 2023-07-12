import React, {useEffect, useState} from 'react';
import './App.css';
import Todo from "./component/todo";
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import {ITodo} from "./interfaces/todo.interface";
import AddTodoForm from "./component/add-todo-form";
import {getTodoList, getTodoListByFilter} from "./reducer/todo.slice";
import SearchFilterTodo from "./component/search-filter-todo";

const base_url = 'http://localhost:9000/todos'

function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchTodoList()
    }, [])

    const dispatch = useDispatch();
    const todoStore = useSelector((state: any) => state.todos);

    const fetchTodoList = () => {
        setLoading(true)
        axios.get(`${base_url}`).then((res) => {
            setLoading(false);
            dispatch(getTodoList(res.data))
        })
    }

    const renderTodoList = (data: ITodo[]) => {
        return data.map((data) => {
            return <Todo key={data.id} id={data.id} name={data.name} completed={data.completed}
                         handleDelete={handleDelete}
                         handleCompleteOrIncomplete={handleCompleteOrIncomplete}/>
        })
    }

    const handleDelete = (id: string) => {
        axios.delete(`${base_url}/${id}`).then(() => {
            fetchTodoList()
        }).catch()
    }

    const handleCompleteOrIncomplete = (id: string, todoStatus: boolean) => {
        axios.put(`${base_url}/${id}`, {
            completed: !todoStatus
        }).then(() => {
            fetchTodoList()
        }).catch()
    }

    const handleAddTodo = (name: string) => {
        axios.post(`${base_url}`, {
            name: name,
            completed: false,
        }).then(() => {
            fetchTodoList()
        }).catch()
    }

    const handleSearchFilter = ({name, status}: { name: string, status: boolean }) => {
        if (Array(todoStore.data)) {
            let filteredTodos: ITodo[] = []
            if (name !== '') {
                const lowerNameTodo = name.toLowerCase();
                filteredTodos = todoStore.data.filter((todo: ITodo) => todo.name.toLowerCase().includes(lowerNameTodo))
                if(status) {
                    filteredTodos = filteredTodos.filter((todo: ITodo) => todo.completed)
                    dispatch(getTodoListByFilter(filteredTodos))
                }
                dispatch(getTodoListByFilter(filteredTodos))
            } else {
                if(status) {
                    filteredTodos = todoStore.data.filter((todo: ITodo) => (todo.completed))
                    dispatch(getTodoListByFilter(filteredTodos))
                } else {
                    fetchTodoList()
                }
            }
        }
    }

    return (
        <div className="App">
            <h3>My Todo List</h3>
            <AddTodoForm handleAddTodo={handleAddTodo}/>
            <SearchFilterTodo handleSearchFilter={handleSearchFilter}/>
            <div className="todo-container">
                {renderTodoList(todoStore.data)}
                {loading && <p>Loading</p>}
            </div>
        </div>
    );
}

export default App;

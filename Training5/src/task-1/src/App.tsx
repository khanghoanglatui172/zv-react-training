import React, {useEffect, useMemo, useState} from 'react';
import './App.css';
import Todo from "./component/todo";
import axios from 'axios';
import {useDispatch} from "react-redux";
import {ITodo} from "./interfaces/todo.interface";
import AddTodoForm from "./component/add-todo-form";
import {creatTodo, deleteTodo, getTodoList, updateTodo} from "./reducer/todo.slice";
import SearchFilterTodo from "./component/search-filter-todo";
import {useAppSelector} from "./hook/useAppSelector";

const base_url = 'http://localhost:9000/todos'

function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchTodoList()
    }, [])

    const dispatch = useDispatch();
    const todoStore = useAppSelector((state) => state.todos);

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

    const handleDelete = async (id: string) => {
        await axios.delete(`${base_url}/${id}`)
        dispatch(deleteTodo(id))
    }

    const handleCompleteOrIncomplete = async (id: string, todoStatus: boolean) => {
        const todo = await axios.put(`${base_url}/${id}`, {
            completed: !todoStatus
        })
        dispatch(updateTodo(todo.data))
    }

    const handleAddTodo = async (name: string) => {
       const todo =  await axios.post(`${base_url}`, {
            name: name,
            completed: false,
        })
        dispatch(creatTodo(todo.data))
    }

    const handleSearchFilter = (name: string, status: boolean, data: ITodo[]) => {
        let filteredTodos: ITodo[] = data
        if (name !== '') {
            const lowerNameTodo = name.toLowerCase();
            filteredTodos = todoStore.data.filter((todo: ITodo) => todo.name.toLowerCase().includes(lowerNameTodo))
            if (status) {
                filteredTodos = filteredTodos.filter((todo: ITodo) => todo.completed)
            }
        } else {
            if (status) {
                filteredTodos = todoStore.data.filter((todo: ITodo) => (todo.completed))
            }
        }
        return filteredTodos
    }
    const todoList = useMemo(() => handleSearchFilter(todoStore.keyword, todoStore.filterStatus, todoStore.data), [todoStore.keyword, todoStore.filterStatus, todoStore.data])

    return (
        <div className="App">
            <h3>My Todo List</h3>
            <AddTodoForm handleAddTodo={handleAddTodo}/>
            <SearchFilterTodo/>
            <div className="todo-container">
                {renderTodoList(todoList)}
                {loading && <p>Loading</p>}
            </div>
        </div>
    );
}

export default App;

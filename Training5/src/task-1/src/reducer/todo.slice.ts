import {createSlice} from '@reduxjs/toolkit'
import {ITodo} from "../interfaces/todo.interface";

interface TodoState {
    data: ITodo[],
    keyword: string,
    filterStatus: boolean
    error: any
}

const initialState: TodoState = {
    data: [],
    keyword: '',
    filterStatus: false,
    error: null,
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        creatTodo(state, action) {
            state.data.push(action.payload);
            state.error = null
        },
        getTodoList(state, action) {
            state.data = action.payload
            state.error = null
        },
        updateTodo(state, action) {
            const index = state.data.findIndex((todo) => todo.id === action.payload.id);
            state.data[index] = action.payload;
            state.error = null
        },
        deleteTodo(state, action) {
            state.data = state.data.filter((todo) => todo.id !== action.payload);
        },
        setSearchKeyword(state, action) {
            state.keyword = action.payload
        },
        setFilter(state, action) {
            state.filterStatus = action.payload
        }
    }
})

const {actions, reducer} = todoSlice;
export const {
    creatTodo,
    deleteTodo,
    getTodoList,
    updateTodo,
    setSearchKeyword,
    setFilter
} = actions;

export default reducer
import { createSlice } from '@reduxjs/toolkit'
import {ITodo} from "../interfaces/todo.interface";

interface TodoState {
    data: ITodo[],
    error: any
}

const initialState: TodoState  = {
    data: [],
    error: null,
}

const todoSlice = createSlice({
    name: 'todo',
    initialState ,
    reducers:{
        GET_TODO_LIST_SUCCESS(state, action){
            state.data = action.payload
            state.error = null
        },
        GET_TODO_LIST_BY_FILTER(state, action) {
            state.data = action.payload
            state.error = null
        },
        GET_TODO_LIST_FAILED(state, action) {
            state.data = []
            state.error = action.payload
        }
    }
})

const { actions, reducer } = todoSlice;
export const {
    GET_TODO_LIST_SUCCESS,
    GET_TODO_LIST_FAILED,
    GET_TODO_LIST_BY_FILTER,
} = actions;

export default reducer
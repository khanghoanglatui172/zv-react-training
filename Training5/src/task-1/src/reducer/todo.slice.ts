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
        getTodoList(state, action){
            state.data = action.payload
            state.error = null
        },
        getTodoListByFilter(state, action) {
            state.data = action.payload
            state.error = null
        },
    }
})

const { actions, reducer } = todoSlice;
export const {
    getTodoList,
    getTodoListByFilter,
} = actions;

export default reducer
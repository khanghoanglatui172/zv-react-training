import { createSlice } from '@reduxjs/toolkit'
import {User} from "../interfaces/user.interface";


interface UsersState {
    data: User[],
    error: any
}

const initialState: UsersState  = {
    data: [],
    error: null,
}

const usersSlice = createSlice({
    name: 'users',
    initialState ,
    reducers:{
        getUserList(state, action){
            state.data = action.payload
            state.error = null
        },
    }
})

const { actions, reducer } = usersSlice;
export const {
    getUserList,
} = actions;

export default reducer
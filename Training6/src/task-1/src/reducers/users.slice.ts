import { createSlice } from '@reduxjs/toolkit'
import {User} from "../interfaces/user.interface";


interface UsersState {
    data: User[],
    userDetail: User | null,
    error: any,
    loading: boolean
}

const initialState: UsersState  = {
    data: [],
    userDetail: null,
    error: null,
    loading: false
}

const usersSlice = createSlice({
    name: 'users',
    initialState ,
    reducers:{
        getUserListFetch(state, action){
            state.loading= true
            state.error = null
        },
        getUserListSuccess(state, action){
            state.loading= false
            state.data = action.payload
            state.error = null
        },
        getUserListFail(state, action){
            state.loading= false
            state.error = action.payload
        },
        getParticularUserDetailFetch(state, action){
            state.loading= true
            state.error = null
        },
        getParticularUserDetailSuccess(state, action){
            state.loading= false
            state.userDetail = action.payload
            state.error = null
        },
        getParticularUserDetailFail(state, action){
            state.loading= false
            state.userDetail = null
            state.error = action.payload
        },
    }
})

const { actions, reducer } = usersSlice;
export const {
    getUserListFetch,
    getUserListSuccess,
    getUserListFail,
    getParticularUserDetailFetch,
    getParticularUserDetailSuccess,
    getParticularUserDetailFail
} = actions;

export default reducer
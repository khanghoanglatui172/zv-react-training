import {createSlice} from '@reduxjs/toolkit'
import {User} from "../interfaces/user.interface";


interface AuthState {
    data: {
        userDetail: User,
        token: string
    },
    error: any
}

const initialState: AuthState = {
    data: {userDetail: {id: '', email: '', fullName: '', role: ''}, token: ''},
    error: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.data.token = action.payload
            state.error = null
        },
        getUserDetail(state, action) {
            state.data = {...state.data, ...action.payload}
            state.error = null
        }
    }
})

const {actions, reducer} = authSlice;
export const {
    login,
    getUserDetail
} = actions;

export default reducer
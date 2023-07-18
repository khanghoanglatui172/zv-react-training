import {createSelector, createSlice} from '@reduxjs/toolkit'
import {User} from "../interfaces/user.interface";
import {RootState} from "../store";


interface AuthState {
    data: {
        userDetail: User,
        token: string
    },
    loading: boolean
    error: any
}

const initialState: AuthState = {
    data: {userDetail: {id: '', email: '', fullName: '', role: ''}, token: ''},
    loading: false,
    error: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginFetch(state, action) {
            state.loading = true
            state.error = null
        },
        loginSuccess(state, action) {
            state.loading = false
            state.data.token = action.payload
            state.error = null
        },
        loginFail(state, action) {
            state.loading = false
            state.error = action.payload
        },
        getUserDetailFetch(state, action) {
            state.loading = true
            state.error = null
        },
        getUserDetailSuccess(state, action) {
            state.loading = false
            state.data= {...state.data, userDetail: action.payload}
            state.error = null
        }
    }
})

const {actions, reducer} = authSlice;
export const {
    loginFetch,
    loginSuccess,
    loginFail,
    getUserDetailFetch,
    getUserDetailSuccess
} = actions;

const authSelector = (state: RootState) => state.auth

export const getToken = createSelector(authSelector, (state) => state.data.token)

export default reducer
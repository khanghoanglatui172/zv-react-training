import {createSelector, createSlice} from '@reduxjs/toolkit'

interface NetworkState {
    online: boolean
}

const initialState: NetworkState = {
    online: navigator.onLine
}

const networkSlice = createSlice({
    name: 'network',
    initialState,
    reducers: {
        setNetworkStatus: (state, action) => {
            state.online = action.payload
        }
    }
})

const {actions, reducer} = networkSlice;

export const {
    setNetworkStatus
} = actions

export default reducer

const selectSelf = (state: NetworkState) => state.online
export const networkStatus = createSelector(selectSelf, (state) => state)
import {configureStore} from '@reduxjs/toolkit'
import {persistStore} from 'redux-persist';
import rootReducer from '../reducers'

const store = configureStore({
    reducer: {
        root: rootReducer,
    },
})

const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>


export {persistor, store}
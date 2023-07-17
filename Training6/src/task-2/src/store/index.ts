import {configureStore} from '@reduxjs/toolkit'
import {persistStore} from 'redux-persist';
import createSagaMiddleware from "redux-saga";
import rootReducer from '../reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
    devTools: process.env.NODE_ENV !== "production",
})

const persistor = persistStore(store)
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export {persistor, store}
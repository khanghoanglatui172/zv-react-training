import {configureStore} from '@reduxjs/toolkit'
import {persistStore} from 'redux-persist';
import createSagaMiddleware from "redux-saga";
import rootReducer from '../reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware]
})

const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

sagaMiddleware.run(rootSaga);

export {persistor, store}
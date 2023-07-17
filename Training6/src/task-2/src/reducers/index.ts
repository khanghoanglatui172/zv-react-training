import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";
import {combineReducers} from "redux";
import tasksReducer from './tasks.slice'
import networkReducer from './network.slice'

const rootPersistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    tasks: tasksReducer,
    network: networkReducer
})

export default persistReducer(rootPersistConfig, rootReducer)
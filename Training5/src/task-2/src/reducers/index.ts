import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";
import {combineReducers} from "redux";
import authReducer from './auth.slice';
import usersReducer from './users.slice';

const rootPersistConfig = {
    key: 'root',
    storage,
}

const authPersistConfig = {
    key: "auth",
    storage: storage,
    whiteList: ["auth"],
};

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    users: usersReducer
})

export default persistReducer(rootPersistConfig, rootReducer)
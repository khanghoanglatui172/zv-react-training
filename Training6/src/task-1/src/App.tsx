import React from 'react';
import './App.css';
import {
    BrowserRouter, Route, Routes
} from "react-router-dom";
import LoginPage from "./pages/login-page";
import HomePage from "./pages/app-page";
import Users from "./pages/users";
import MyInfo from "./pages/my-info";
import Home from "./pages/home-page";
import UserDetail from "./components/user-detail";
import ProtectedRoute from "./routes/protected.route";
import {useAppSelector} from "./hook/useAppSelector";
import {getToken} from "./reducers/auth.slice";

export const base_url = 'http://localhost:9000'

function App() {

    const token = useAppSelector(getToken);

    const isLogged = token !== ''

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route index element={<ProtectedRoute isLogged={isLogged}><HomePage/></ProtectedRoute>}/>
                    <Route path={'login'}
                           element={<LoginPage/>}></Route>
                    <Route path={'app'} element={<ProtectedRoute isLogged={isLogged}><HomePage/></ProtectedRoute>}>
                        <Route index path={'home'} element={<Home/>}/>
                        <Route path={'users'} element={<Users/>}>
                            <Route index path={':id'} element={<UserDetail/>}/>
                        </Route>
                        <Route path={'my-info'} element={<MyInfo/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

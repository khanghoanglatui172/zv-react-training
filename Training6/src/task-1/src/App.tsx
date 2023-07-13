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

export const base_url = 'http://localhost:9000'

function App() {

  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<LoginPage/>}></Route>
            <Route path={'app'} element={<HomePage/>}>
              <Route index path={'home'} element={<Home/>}/>
              <Route path={'users'}  element={<Users/>}>
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

import React from 'react';
import Login from '../Login/Login';
import { Routes, Route } from "react-router-dom";
import ChatView from '../ChatView/ChatView';
import ProtectedRoutes from '../ProtectedRoutes/ProtectedRoutes';

export default function MainView() {
  return (
    <main className='App'>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route element={<ProtectedRoutes />}>
                <Route path='ChatView' element={<ChatView />} />
            </Route>
        </Routes>
    </main>
  )
}

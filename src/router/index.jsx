
import { lazy } from "react";
import { Navigate } from "react-router-dom";

// const Login = lazy(() => import('../pages/login'))
// const Home = lazy(() => import('../pages/home'))
import Home from '../pages/home'
import Login from '../pages/login'

export const routers = [

    {
        path: '/home',
        element: <Home />,
        name: '首页'
    },
    {
        path: '/login',
        element: <Login />,
        name: '登录'
    },
    {
        path: '/',
        element: <Navigate to='/login' />,

    },
]


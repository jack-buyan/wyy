
import { lazy } from "react";
import AuthRouter from "../utils/authRouter";

const Login = lazy(() => import('../pages/login'))
const Home = lazy(() => import('../pages/home'))

export const routers = [
    // 需要鉴权的组件home
    {
        path: '/home',
        element: <AuthRouter> <Home /> </AuthRouter>,
        name: '首页'
    },
    {
        path: '/login',
        element: <Login />,
        name: '登录'
    },
    {
        path: '/',
        element: <AuthRouter> <Home /> </AuthRouter>

    },
]


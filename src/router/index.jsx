
import { lazy } from "react";
import AuthRouter from "../utils/authRouter";

const Login = lazy(() => import('../pages/login'))
const Home = lazy(() => import('../pages/home'))
const Podcasts = lazy(() => import('../pages/podcasts'))
const ItemMusic = lazy(() => import('../pages/itemMusic'))
// import Login from '../pages/login'
// import Home from '../pages/home'
// import Podcasts from '../pages/podcasts'
export const routers = [
    // 需要鉴权的组件home
    {
        path: '/home',
        element: <AuthRouter>
            <Home />
        </AuthRouter>,
        name: '首页'
    },
    {
        path: '/login',
        element: <Login />,
        name: '登录'
    },
    {
        path: '/podcasts',
        element: <Podcasts />,
        name: '播客'
    },
    {
        path: '/ltemMusic',
        element: <ItemMusic />,
        name: '歌单详情'
    },
    {
        path: '/',
        element: <AuthRouter> <Home /> </AuthRouter>

    },
]


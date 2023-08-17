import { Navigate } from "react-router-dom"
import tool from "./tool"
// 高阶组件:把一个组件当成另外一个组件的参数传入 然后通过一定的判断 返回新的组件
//鉴权 判断有没有token
function AuthRouter({ children }) {

    let isToken = tool.cookie.get('TOKEN')

    if (isToken) {
        return <>{children}</>
    } else {

        return <Navigate to='/login' replace></Navigate>
    }


}

export default AuthRouter



import { Navigate } from "react-router-dom"
import tool from "./tool"
//鉴权 判断有没有token
function AuthRouter({ children }) {

    let isToken = tool.cookie.get('TOKEN')
   
    if (isToken !== null) {
        return <>{children}</>
    } else {
        console.log('isToken');
        return <Navigate to='/login' replace />
      }

   
}

export default AuthRouter
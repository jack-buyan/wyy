import { createSlice } from "@reduxjs/toolkit";
import initState from "../state";  //引入state

const infoSlice = createSlice({
    name: 'info',  //命民空间，name值会作为action type前缀
    initialState: initState,   //初始化数据
    reducers: {
        setColorPrimary: (state, action) => {
            console.log(action);
            state.theme = action.payload
        }
    }
})
export const {setColorPrimary} = infoSlice.actions
export default infoSlice.reducer
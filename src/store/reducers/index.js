import { createSlice } from "@reduxjs/toolkit";
import initState from "../state";  //引入state

const infoSlice = createSlice({
    name: 'info',  //命民空间，name值会作为action type前缀
    initialState: initState,   //初始化数据
    reducers: {
        setColorPrimary: (state, action) => {

            state.theme = action.payload
            console.log(action.payload);
        },
        setMode: (state, action) => {
            localStorage.setItem('COLOR', JSON.stringify(action.payload))
            state.mode = action.payload
        },
        updatePlayList: (state, action) => {
            state.playList = action.payload
        },
        updatePlayListIndex: (state, action) => {
            state.playListIndex = action.payload
        },
        updateIsplayNavShow: (state, action) => {
            state.isplayNav = action.payload
        },
        updateIsbtnShow: (state, action) => {
            state.isbtnShow = action.payload
        }
    }
})
export const { setColorPrimary, setMode, updatePlayList, updatePlayListIndex, updateIsplayNavShow, updateIsbtnShow } = infoSlice.actions
export default infoSlice.reducer
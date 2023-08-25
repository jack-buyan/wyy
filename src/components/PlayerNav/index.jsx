import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateIsbtnShow } from '../../store/reducers'
import Turntable from '../../components/Turntable'
import DEFAULT_CONFIG from '../../config'
export default function PlayerNav({ num }) {

    const audio = useRef()
    const dispatch = useDispatch()
    const mode = useSelector(state => state.mode)
    const isbtnShow = useSelector(state => state.isbtnShow)
    const playList = useSelector(state => state.playList)
    const playListIndex = useSelector(state => state.playListIndex)



    useEffect(() => {
        //paused 为true 歌暂停 默认为true
        audio.current.autoplay = true
        if (audio.current.paused) { //暂停状态下 改变icon
            dispatch(updateIsbtnShow(false))
        }
    }, [playListIndex])

    useEffect(() => {
        audio.current.autoplay = true
        dispatch(updateIsbtnShow(false))
    }, [playList])




    function PlayNav() {

        function play() {
            if (audio.current.paused) {
                audio.current.play() // 播放
                dispatch(updateIsbtnShow(false))

            } else {
                audio.current.pause() //暂停
                dispatch(updateIsbtnShow(true))

            }
        }

        return (
            <li style={{ display: 'flex', alignItems: 'center', padding: '5px 12px', background: `${mode ? DEFAULT_CONFIG.dark.COLOR : ''}` }}>
                <div style={{ width: '40px', height: '40px', marginRight: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Turntable width={40} height={40} url={playList[playListIndex].al.picUrl} />
                </div>
                <div style={{ flex: '1', color: `${mode ? '#fff' : ''}` }}>{playList[playListIndex].al.name}</div>
                <div style={{ width: '40px', height: '40px', margin: '0 10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                    {
                        <i className={`iconfont ${isbtnShow ? 'icon-bofang' : 'icon-zanting'}`} style={{ fontSize: '35px', color: `${mode ? '#fff' : ''}` }} onClick={play}></i>
                    }
                </div>
                <div style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className='iconfont icon-shouqicaidan' style={{ fontSize: '35px', color: `${mode ? '#fff' : ''}` }}></i>
                </div>
            </li>

        )
    }

    function Audio() {
        return (
            <audio src={`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`} ref={audio}></audio>
        )
    }

    return (
        <div style={{ height: '55px', width: '100%', background: '#fff', position: 'fixed', bottom: `${num}px` }}>
            <ul >
                {PlayNav()}

            </ul>
            {/* <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"></audio> */}
            {Audio()}
        </div>
    )
}

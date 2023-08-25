import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'
import { updatePlayList, updatePlayListIndex, updateIsplayNavShow } from '../../store/reducers'
import { useDispatch } from 'react-redux'
export default function ItemMusicTop({ playlist: { playlist }, itemList: { songs } }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    if (playlist == undefined && songs == undefined) return

    function playCurrent(index) {
        dispatch(updatePlayList(songs))
        dispatch(updatePlayListIndex(index))
        dispatch(updateIsplayNavShow(true))
    }
    function Nav() {
        return (
            <div className={styles.itemMusicTop} >
                <div className={styles.itemLeft}>
                    <i className="iconfont icon-zuo" onClick={() => navigate(-1)}></i>
                    <span>歌单</span>
                </div>
                <div className={styles.itemRight}>
                    <span>
                        <i className="iconfont icon-sousuo"></i>
                    </span>
                    <span>
                        <i className="iconfont icon-gengduo-shuxiang"></i>
                    </span>
                </div>
            </div>
        )
    }


    function Content() {
        return (
            <div className={styles.bgconten} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div className={styles.contenleft}>
                    <img src={playlist.coverImgUrl} alt="" />
                    <div className={styles.touxiang}>
                        <i className="iconfont icon-bofang5"></i>
                        <span>{playlist.playCount}</span>
                    </div>
                </div>

                <div className={styles.contenright}>
                    <div className={styles.contenTop}>
                        <span>{playlist.name}</span>
                    </div>
                    <div className={styles.contenBootom}>
                        <div className={styles.contenname}>
                            <img src={playlist.coverImgUrl} alt="" />
                            <span>{playlist.creator.nickname}</span>
                            <i className="iconfont icon-jia"></i>
                        </div>

                        <div className={styles.contenjieshao}>
                            <span>{playlist.description}</span>
                        </div>

                    </div>
                </div>
            </div>
        )
    }


    function IconButton() {
        return (
            <div className={styles.tarbar}>
                <div>
                    <i className="iconfont icon-xinxi" style={{ fontSize: '27px' }}></i>
                    <span>{playlist.commentCount}</span>
                </div>
                <div>
                    <i className="iconfont icon-fenxiang" style={{ fontSize: '25px' }}></i>
                    <span>{playlist.shareCount}</span>
                </div>
                <div>
                    <i className="iconfont icon-iconfontzhizuobiaozhun023146" style={{ fontSize: '24px' }}></i>
                    <span>下载</span>
                </div>
                <div>
                    <i className="iconfont icon-xianshi_xuanze" style={{ fontSize: '26px' }}></i>
                    <span>多选</span>
                </div>
            </div >
        )
    }

    function MusicList() {
        return (
            songs ? songs.map((e, i) => (
                < li style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '20px' }} key={i} onClick={() => playCurrent(i)}>
                    <div style={{ display: 'flex', alignItems: 'center', color: '#fff', flex: '1' }}>
                        <span>{i + 1}</span>
                        <div style={{ padding: '0 18px', color: '#fff' }}>
                            <div>
                                <p style={{ margin: '0', fontSize: '18px' }}>{e.name}</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                {
                                    e.ar.map((s, index) => (

                                        <p key={index} style={{ margin: '0', paddingTop: '5px', fontSize: '15px', color: '#fff', paddingRight: '2px' }}>{s.name}</p>
                                    ))
                                }
                            </div>

                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ paddingRight: '5px', color: '#fff' }}>
                            <i className='iconfont icon-shipin'></i>
                        </div>
                        <div>
                            <i className='iconfont icon-gengduo-shuxiang' style={{ color: '#fff', fontSize: '16px' }}></i>
                        </div>
                    </div>
                </li >
            )) : false

        )
    }

    return (
        <div>
            <div className={styles.box}>

                <img src={playlist.coverImgUrl} alt="" style={{
                    zIndex: '-1', width: '100%', height: '100vh',
                    filter: 'blur(100px)'
                }} />

                <div style={{ position: 'fixed', width: '100%', top: '0' }}>
                    {Nav()}
                    <div style={{ width: '100%', height: '100%', overflowX: 'scroll', height: '95vh' }}>
                        {Content()}
                        {IconButton()}

                        <ul style={{ padding: '30px 12px', paddingBottom: '35px' }}>
                            {MusicList()}

                        </ul>
                    </div>



                </div>

            </div>


        </div >
    )
}

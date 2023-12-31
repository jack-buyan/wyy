
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'
export default function Recommend(props) {
    const navigate = useNavigate()
    const playCountData = (num) => {

        if (num > 100000000) {
            return (num / 100000000).toFixed(0)

        } else if (num > 10000) {
            return (num / 10000).toFixed(0)
        }
    }


    async function songList(val) {
        navigate('/ltemMusic', { state: { id: val.id } })


    }


    return (
        <div>
            <div className={styles.tjTitle}>
                <div className={styles.left}>
                    <span style={{ color: `${props.mode ? '#fff' : ''}` }}>每日推荐</span>
                    <i className='iconfont icon-youjiantou' style={{ color: `${props.mode ? '#fff' : ''}` }}></i>
                </div>
                <i className='iconfont icon-gengduo-shuxiang' ></i>
            </div>

            <div className={styles.navs}>
                <ul className={styles.tj}>

                    {
                        props.playlist.map((e, i) => (
                            <li key={i} onClick={() => songList(e)}>
                                <div className={styles.playCount}>
                                    <i className='iconfont icon-bofang5' ></i>
                                    <span>{playCountData(e.playCount)}
                                        <span style={{ fontSize: '10px' }}>{e.playCount > 100000000 ? '亿' : '万'}</span>
                                    </span>
                                </div>
                                <img src={e.picUrl} alt="" />
                                <p style={{ color: `${props.mode ? '#fff' : ''}` }}>{e.name}</p>
                                <div style={{ color: '#fff', position: 'absolute', bottom: '50px', right: '10px' }}>
                                    <i className='iconfont icon-bofang5' style={{ fontSize: '18px' }}></i>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>

        </div >
    )
}

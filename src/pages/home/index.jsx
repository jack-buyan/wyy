import React from 'react'
import { Input, Swiper, Grid, CapsuleTabs } from 'antd-mobile'
import { SearchOutline } from 'antd-mobile-icons'
import styles from './index.module.scss'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import PopupModel from '../../components/Popup'
import Recommend from '../../components/Recommend'
import List from '../../components/list'
export default function Home() {
    const mode = useSelector(state => state.mode)
    const [value, setValue] = useState()
    const [list, setList] = useState([])
    const [playlist, setPlaylist] = useState([])
    const [music, setMusic] = useState([])
    let data = new Date()
    const [imgList] = useState([
        {
            url: require('../../assets/images/mr.png'),
            name: '每日推荐'
        },
        {
            url: require('../../assets/images/sr.png'),
            name: '私人漫游'
        },
        {
            url: require('../../assets/images/gd.png'),
            name: '歌单'
        },
        {
            url: require('../../assets/images/phb.png'),
            name: '排行榜'
        },
        {
            url: require('../../assets/images/yss.png'),
            name: '有声书'
        },
        {
            url: require('../../assets/images/szzj.png'),
            name: '数字专辑'
        },
        {
            url: require('../../assets/images/zb.png'),
            name: '直播'
        },
        {
            url: require('../../assets/images/dzxg.png'),
            name: '关注新歌'
        },
        {
            url: require('../../assets/images/ygyy.png'),
            name: '一歌一遇'
        }
    ])
    const [visible, setVisible] = useState(false)
    function isVisible() {
        setVisible(true)
    }



    useEffect(() => {
        const BannerDate = async () => {
            const res = await React.$API.auth.banner.get({ type: '2' })
            setList(res.data.banners)
        }
        BannerDate()


        const Recommend = async () => {
            const res = await React.$API.auth.recommend.get()
            setPlaylist(res.data.result)
        }
        Recommend()

        const newmusic = async () => {
            const res = await React.$API.auth.newmusic.get({ limit: '6' })
            setMusic(res.data.result)
        }
        newmusic()
    }, [])


    const items = list.map((item, index) => (
        <Swiper.Item key={index}>
            <div className={styles.content} style={{ width: '100%', height: '150px' }}>
                <img src={item.pic} alt="" style={{ width: '100%', height: '100%' }} />
            </div>
        </Swiper.Item>
    ))

    return (
        <div>
            <div className={styles.box} style={{ color: `${mode ? '#fff' : '#666'}` }}>
                <div className={styles.box_left}>
                    <i className='iconfont icon-caidan' onClick={isVisible}></i>
                </div>
                <div className={styles.box_input}>
                    <SearchOutline fontSize={20} className={styles.icon} />
                    <Input placeholder='请输入内容' clearable value={value} onChange={val => { setValue(val) }} color='var(--adm-color-weak)' />
                </div>
                <div className={styles.box_right}>
                    <div className={styles.box_right}>
                        <i className='iconfont icon-luyin'></i>
                    </div>
                </div>
            </div>
            <PopupModel visible={visible} setVisible={setVisible} />
            <Grid columns={3} gap={8}>
                <Grid.Item span={3}>
                    <div className={styles.banner} style={{ padding: '15px 10px' }}>
                        <Swiper autoplay loop indicatorProps={{
                            color: 'white',
                        }} style={{
                            '--border-radius': '8px',
                            '--height': 'auto',
                        }}>{items}</Swiper>
                    </div>
                </Grid.Item>
            </Grid>

            <div className={styles.navs}>
                <ul>
                    {
                        imgList.map((e, i) => (
                            <li key={i}>
                                <span style={{ display: e.name == '每日推荐' ? 'block' : 'none', fontSize: 16, position: 'absolute', top: '18px', fontWeight: 700, color: `${mode ? 'rgb(12,12,14)' : '#fff'}` }}>{data.getDate()}</span>
                                <img src={e.url} alt="" />
                                <span style={{ color: `${mode ? '#FFF' : '#666'}` }}>{e.name}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <Recommend playlist={playlist} mode={mode} />
            <List music={music} />
        </div >
    )
}

import React from 'react'
import { Input, Swiper } from 'antd-mobile'
import { SearchOutline } from 'antd-mobile-icons'
import styles from './index.module.scss'
import { useState } from 'react'
import PopupModel from '../../components/Popup'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
export default function Home() {
    const mode = useSelector(state => state.mode)
    const [value, setValue] = useState()
    const [list, setList] = useState([])
    const [visible, setVisible] = useState(false)
    function isVisible() {
        setVisible(true)
    }


    useEffect(() => {
        const BannerDate = async () => {
            const res = await React.$API.auth.banner.get({ type: '2' })
            console.log(res);
            setList(res.data.banners)

        }
        BannerDate()
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
            <div className={styles.box} style={{ color: `${mode ? '#fff' : 'var(--adm-color-weak)'}` }}>
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
            <div className={styles.banner} style={{ padding: '15px 10px' }}>
                <Swiper autoplay loop style={{
                    '--border-radius': '8px',
                    '--height': 'auto'
                }}>{items}</Swiper>
            </div>
        </div >
    )
}

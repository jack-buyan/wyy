import React from 'react'
import { Input } from 'antd-mobile'
import { SearchOutline } from 'antd-mobile-icons'
import styles from './index.module.scss'
import { useState } from 'react'
import PopupModel from '../../components/Popup'
export default function Home() {
    const [value, setValue] = useState()
    const [visible, setVisible] = useState(false)
    function isVisible() {
        setVisible(true)
    }
    return (
        <div>
            <div className={styles.box} >
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
            <div>2</div>
        </div >
    )
}

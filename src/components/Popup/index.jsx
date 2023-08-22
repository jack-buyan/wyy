import React, { useState } from 'react'
import { Popup, Divider, Switch } from 'antd-mobile'
import { setMode, setColorPrimary } from '../../store/reducers'
import styles from './index.module.scss'
import { useDispatch } from 'react-redux'
import DEFAULT_CONFIG from '../../config'

export default function PopupModel({ visible, setVisible }) {

    const mode = JSON.parse(localStorage.getItem('COLOR'))

    const [checked, setChecked] = useState(false)
    const dispatch = useDispatch()

    const reviseMock = (val) => {
        setChecked(val)
        dispatch(setMode(!checked))

        val ? dispatch(setColorPrimary(DEFAULT_CONFIG.dark)) : dispatch(setColorPrimary(DEFAULT_CONFIG.light))
    }
    return (
        <div>
            <Popup visible={visible} onMaskClick={() => { setVisible(false) }} position='left' bodyStyle={{ width: '70vw', backgroundColor: `${mode ? 'rgb(21,21,21)' : '#f2f2f2'}`, overflow: 'hidden' }}>
                <div className={styles.box}>
                    <div className={styles.title} style={{ background: `${mode ? 'rgb(44,44,44)' : '#fff'}`, color: `${mode ? '#fff' : '#333'}` }}>
                        <p className={styles.title_left} >李不言</p>
                        <i className='iconfont icon-saoyisao'></i>
                    </div>
                    <div className={styles.cardOne} style={{ background: `${mode ? 'rgb(44,44,44)' : '#fff'}` }}>
                        <ul className={styles.other} style={{ color: `${mode ? '#fff' : '#333'}` }}>
                            <li>
                                <span>其它</span>
                                <Divider style={{ marginBottom: '0', borderColor: `${mode ? 'rgb(63,63,63)' : 'var(--adm-color-border)'}` }} />
                            </li>
                            <li>
                                <div className={styles.mode}>
                                    <i className='iconfont icon-yueliang'></i>
                                    <p>深色模式</p>
                                    <div className={styles.switch} >
                                        <Switch defaultChecked={mode} onChange={val => reviseMock(val)} style={{
                                            '--checked-color': 'rgb(106,50,49)',
                                            '--height': '20px',
                                            '--width': '8px',
                                        }} />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </Popup >
        </div >
    )
}



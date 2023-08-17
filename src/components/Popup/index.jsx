import React, { } from 'react'
import { Popup } from 'antd-mobile'
import styles from './index.module.scss'
export default function PopupModel({ visible, setVisible }) {

    return (
        <div>
            <Popup visible={visible} onMaskClick={() => { setVisible(false) }} position='left' bodyStyle={{ width: '60vw' }} >
                <div className={styles.box}>
                    <div className={styles.title}>
                        <p className={styles.title_left} >李不言</p>
                        <i className='iconfont icon-saoyisao'></i>
                    </div>
                    <div>

                    </div>
                </div>
            </Popup >
        </div >
    )
}



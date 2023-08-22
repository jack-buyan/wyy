import React, { useState } from 'react'

import { Swiper } from 'antd-mobile'
import styles from './index.module.scss'


export default function List({ music }) {

    if (!music.length) return



    return (
        <div className={styles.box}>
            <div style={{ width: '100%', overflow: 'auto' }}>
                <ul className={styles.list}>
                    <li className={styles.left}>
                        <ul className={styles.listZj}>
                            <li className={styles.leftZj}>
                                <div className={styles.img}></div>
                                <div className={styles.leftText}>
                                    <p>标题</p>
                                    <span>描述</span>
                                </div>
                            </li>

                            <li className={styles.leftZj}>
                                <div className={styles.img}></div>
                                <div className={styles.leftText}>
                                    <p>标题</p>
                                    <span>描述</span>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.list}>
                        <li className={styles.left}>
                            <ul className={styles.listZj}>
                                <li className={styles.leftZj}>
                                    <div className={styles.img}></div>
                                    <div className={styles.leftText}>
                                        <p>标题</p>
                                        <span>描述</span>
                                    </div>
                                </li>

                                <li className={styles.leftZj}>
                                    <div className={styles.img}></div>
                                    <div className={styles.leftText}>
                                        <p>标题</p>
                                        <span>描述</span>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </li>
                </ul>
            </div>
        </div>
    )
}

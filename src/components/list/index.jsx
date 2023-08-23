import React, { useState } from 'react'

import { Swiper } from 'antd-mobile'
import styles from './index.module.scss'


export default function List({ music, mode }) {
    const [array, setArray] = useState()
    if (!music.length) return



    function arrayChunk(array, size) {
        let data = []
        for (let i = 0; i < array.length; i += size) {
            data.push(array.slice(i, i + size))
        }

        return data
    }
    let arr = arrayChunk(music, 3)
    return (
        <div className={styles.box}>
            <p className={styles.title} style={{ color: `${mode ? '#fff' : ''}` }}>治愈温暖你的时光 </p>
            <div style={{ width: '100%', overflow: 'auto' }}>
                <ul className={styles.list}>

                    {
                        arr.map((e, i) => (
                            <li className={styles.left} key={i}>
                                <ul className={styles.listZj}>


                                    {
                                        e.map((s, j) => (
                                            <li className={styles.leftZj} key={j}>
                                                <img src={s.picUrl} className={styles.img}></img>
                                                <div className={styles.leftText} style={{ color: `${mode ? '#fff' : ''}` }}>
                                                    <p>{s.name}</p>
                                                    <span>{s.song.artists[0].name}</span>
                                                </div>
                                            </li>
                                        ))
                                    }


                                </ul>
                            </li>
                        ))
                    }


                </ul>
            </div>
        </div>
    )
}

import React from 'react'

import styles from './index.module.scss'
export default function Turntable({ width, height, url }) {

    function Cd() {
        return (
            <div>


                <div style={{ width: width, position: 'relative' }} className={styles.img_al}>
                    <img src={require('../../assets/images/cd.png')} alt="" style={{ width: '100%' }} />
                    <img src={url} alt="" style={{ width: '64%', position: 'absolute', left: '18%', top: '18%', borderRadius: '50px' }} />
                </div>


            </div>

        )
    }



    return (
        <div>{Cd()}</div>
    )
}

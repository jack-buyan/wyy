import React, { useRef, useState } from 'react'
import { Grid, Input, Button, Toast } from 'antd-mobile'
import styles from './index.module.scss'


export default function Login() {
    const [value, setValue] = useState('')
    const [loading, setLoading] = useState(false)

    //号码验证
    async function getValue() {
        setLoading(true)
        let { data: res } = await React.$API.auth.login.get({ phone: value })
        if (res.hasPassword) {
            setTimeout(() => {
                toast('验证成功')
            }, 1000)
        } else {
            toast('此号码没有注册')
        }

    }
    //轻提示
    function toast(msg) {
        Toast.show({
            content: msg,
        })
        setLoading(false)
    }


    return (
        <>
            <Grid columns={8} gap={0}>
                <Grid.Item>
                    <div></div>
                </Grid.Item>
                <Grid.Item span={6}>
                    <div className={styles.login}>
                        <div className={styles.login_top}>
                            <div className={styles.login_logo}>
                                <img src={require('../../assets/images/logo.jpg')} alt="" className={styles.img} />
                            </div>
                        </div>
                        <div className={styles.login_bottom}>
                            <div className={styles.login_input}>
                                <Input type='number' autoFocus={true} style={{ paddingLeft: '5px' }} placeholder='输入手机号码' value={value.length > 11 ? value.slice(0, 11) : value} onChange={val => setValue(val)} />
                            </div>
                            <Button block size='large' className={styles.buttom} onClick={getValue} loading={loading} loadingText='正在登录'>一键登录</Button>
                        </div>
                    </div>
                </Grid.Item>
                <Grid.Item>
                    <div></div>
                </Grid.Item>
            </Grid>

        </>
    )
}

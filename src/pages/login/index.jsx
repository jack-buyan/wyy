import React, { useState } from 'react'
import { Grid, Input, Button, Toast } from 'antd-mobile'
import { routers } from '../../router'
import { useRoutes, useNavigate } from 'react-router-dom'

import tool from '../../utils/tool'
import styles from './index.module.scss'


export default function Login() {
    const navigate = useNavigate()
    const [value, setValue] = useState('')
    const [loading, setLoading] = useState(false)
    const [isShow, setIsShow] = useState(false)
    const [text, setText] = useState('发送验证码')
    const [verify, setVerify] = useState('')
    const element = useRoutes(routers)

    //号码验证
    async function getValue() {

        setLoading(true)
        if (!value) return toast('手机号不能为空')

        const res = await React.$API.auth.login2.get({ phone: value })

        if (res.data.code == 200) {
            setIsShow(true)
            setLoading(false)
            setText('登录')
        }

        // let { data: res } = await React.$API.auth.login.get({ phone: value })
        // if (res.hasPassword) {

        //     setTimeout(() => {
        //         toast('验证成功')
        //         let token = tool.cryptoObj.encryptFunc(`${value}&${tool.cryptoObj.gettime}`) //自定义token
        //         navigate('/home')
        //         tool.cookie.set("TOKEN", token, {
        //             expires: 2 * 60 * 60
        //         })
        //     }, 1000)
        // } else {
        //     toast('此号码没有注册')
        // }

    }

    async function getVerify() {
        const res = await React.$API.auth.login3.get({ phone: value, captcha: verify, countrycode: '86' })


        if (res.data) {
            setTimeout(() => {
                toast('验证成功')
                let token = tool.cryptoObj.encryptFunc(`${value}&${tool.cryptoObj.gettime}`) //自定义token
                navigate('/home')
                tool.cookie.set("TOKEN", token, {
                    expires: 15
                })
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
                            <div className={styles.login_verify} style={{ display: isShow ? 'block' : 'none' }}>
                                <Input type='number' autoFocus={true} style={{ paddingLeft: '5px' }} placeholder='输入验证码' value={verify.length > 11 ? verify.slice(0, 11) : verify} onChange={val => setVerify(val)} />
                            </div>
                            <Button block size='large' className={styles.buttom} onClick={isShow ? getVerify : getValue} loading={loading} loadingText='正在发送'>{text}</Button>
                        </div>
                    </div>
                </Grid.Item>
                <Grid.Item>
                    <div></div>
                </Grid.Item>
            </Grid>
            {element}
        </>
    )
}

import React from 'react'
import { TabBar, Divider } from 'antd-mobile'
import {
    AppOutline,
    MessageOutline,
    MessageFill,
    UnorderedListOutline,
    UserOutline,
} from 'antd-mobile-icons'
import { useSelector } from 'react-redux'
import DEFAULT_CONFIG from '../../config'
import './index.scss';
import { useNavigate } from 'react-router-dom'

export default function TabBars() {
    const navigate = useNavigate()
    const mode = useSelector(state => state.mode)
    const tabs = [
        {
            key: '/home',
            title: '首页',
            icon: <AppOutline />,

        },
        {
            key: '/podcasts',
            title: '播客',
            icon: <UnorderedListOutline />,

        },
        {
            key: '/message',
            title: '消息',
            icon: (active: boolean) =>
                active ? <MessageFill /> : <MessageOutline />,

        },
        {
            key: '/personalCenter',
            title: '我的',
            icon: <UserOutline />,
        },
    ]

    function getValue(val) {
        navigate(val)
    }
    return (
        <div style={{ position: 'fixed', width: '100%', bottom: '0', background: `${mode ? DEFAULT_CONFIG.dark.COLOR : '#fff'}` }}>
            <Divider style={{
                margin: '0',
                borderColor: `${mode ? 'rgba(44, 44, 44,0.3)' : '#f1f1f1'}`,

            }} />
            <TabBar onChange={val => getValue(val)}>
                {tabs.map(item => (
                    <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                ))}
            </TabBar>
        </div>
    )
}

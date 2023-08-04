import { ConfigProvider} from 'antd-mobile'
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useRoutes } from 'react-router-dom'
import { routers } from './router'
import './App.scss'

export default function App() {
  const colorPrimary = useSelector(state => state.theme.COLOR)
  const element = useRoutes(routers)
  return (
    <ConfigProvider theme={{
      token: {
        colorPrimary,
      },
    }}>
      <div style={{background:colorPrimary}}>
        {element}
      </div>
      </ConfigProvider>
  )
}

import { ConfigProvider } from 'antd-mobile'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRoutes } from 'react-router-dom'
import { routers } from './router'
import DEFAULT_CONFIG from './././config'
import './App.scss'

export default function App() {
  const mode = useSelector(state => state.mode)
  const { dark, light } = DEFAULT_CONFIG
  const colorPrimary = mode ? dark.COLOR : light.COLOR


  const element = useRoutes(routers)
  return (
    <ConfigProvider theme={{
      token: {
        colorPrimary,
      },
    }}>
      <div style={{ background: colorPrimary }}>
        {element}
      </div>
    </ConfigProvider>
  )
}

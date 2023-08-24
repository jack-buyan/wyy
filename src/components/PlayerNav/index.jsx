import React from 'react'

export default function PlayerNav({ num }) {


    function PlayNav() {
        return (
            <li style={{ display: 'flex', alignItems: 'center', padding: '5px 12px' }}>
                <div style={{ width: '40px', height: '40px', background: 'green', marginRight: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>图片</div>
                <div style={{ flex: '1' }}>标题</div>
                <div style={{ width: '40px', height: '40px', margin: '0 10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className='iconfont icon-bofang' style={{ fontSize: '35px' }}></i>
                    {/* <i className='iconfont icon-zanting' style={{ fontSize: '35px' }}></i> */}
                </div>
                <div style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className='iconfont icon-shouqicaidan' style={{ fontSize: '35px' }}></i>
                </div>
            </li>

        )
    }

    return (
        <div style={{ height: '55px', width: '100%', background: '#fff', position: 'fixed', bottom: `${num}px` }}>
            <ul >
                {PlayNav()}
            </ul>
        </div>
    )
}

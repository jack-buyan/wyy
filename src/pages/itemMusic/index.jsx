import React, { useEffect, useState } from 'react'


import { useLocation } from 'react-router-dom';
import ItemMusicTop from '../../components/ItemMusicTop'
import MusicDetail from '../../components/MusicDetail'

export default function ItemMusic() {
    const { state: { id } } = useLocation()
    const [playlist, setPlaylist] = useState([])
    const [itemList, setItemList] = useState([])

    const queryForm = {
        id: id,
        limit: 20,
        offset: 1
    }

    useEffect(() => {

        const fetchData = async () => {
            //获取歌单详情页
            const res = await React.$API.auth.playlist.get({ id })
            setPlaylist(res.data)

            const { data: result } = await React.$API.auth.song.get(queryForm)
            setItemList(result)
        }

        fetchData()
    }, [])

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>

            <div style={{ flex: '1' }} >
                <ItemMusicTop playlist={playlist} itemList={itemList} />
            </div>
            {/* <div style={{ flex: '1' }}>
                <MusicDetail itemList={itemList} />
            </div> */}
        </div>
    )
}

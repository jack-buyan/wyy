import React from 'react'
import { useLocation } from 'react-router-dom';
import ItemMusicTop from '../../components/ItemMusicTop'
import MusicDetail from '../../components/MusicDetail'

export default function ItemMusic() {
    const { state: { id } } = useLocation()

    // const res = await React.$API.auth.playlist.get({ id })
    // console.log(res);

    return (
        <div>
            <ItemMusicTop />
            <MusicDetail />
        </div>
    )
}

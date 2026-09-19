import { useState } from 'react'
import styles from './App.module.css'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'

function App() {
    const tracks = [
        {
            name: "test",
            artist: "test",
            album: "test",
            id: 0
        },
        {
            name: "test1",
            artist: "test1",
            album: "test1",
            id: 1
        },
        {
            name: "test2",
            artist: "test2",
            album: "test2",
            id: 2
        },
        {
            name: "test3",
            artist: "test3",
            album: "test3",
            id: 3
        },
            {
            name: "test4",
            artist: "test4",
            album: "test4",
            id: 4
        }
    ]

    return (
        <>
        <SearchBar />
        <div className={styles.songs}>
            <SearchResults tracks={tracks}/>
            <Playlist />
        </div>
        </>
    )
}

export default App

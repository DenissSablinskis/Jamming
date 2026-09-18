import { useState } from 'react'
import styles from './App.module.css'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'

function App() {
    return (
        <>
        <SearchBar />
        <div className={styles.songs}>
            <SearchResults />
            <Playlist />
        </div>
        </>
    )
}

export default App

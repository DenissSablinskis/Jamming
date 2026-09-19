import { useState } from 'react'
import styles from './App.module.css'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'

function App() {
    const [tracks, setTracks] = useState([
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
    ])
    const [playlistName, setPlaylistName] = useState('MyPlaylist');
    const [playlistTracks, setPlaylistTracks] = useState([
        {
            name: "test5",
            artist: "test5",
            album: "test5",
            id: 5
        },
        {
            name: "test6",
            artist: "test6",
            album: "test6",
            id: 6
        },
        {
            name: "test7",
            artist: "test7",
            album: "test7",
            id: 7
        },
        {
            name: "test8",
            artist: "test8",
            album: "test8",
            id: 8
        },
            {
            name: "test9",
            artist: "test9",
            album: "test9",
            id: 9
        }
    ])
   

    function addButtonHandler(track) {
        for (let i = 0; i < playlistTracks.length; i++ ) {
            if (track.id === playlistTracks[i].id) return; 
        }
        setPlaylistTracks(prev => [...prev, track]);
    }

    function removeButtonHandler(track) {
        setPlaylistTracks(prev => prev.filter(playlistTrack => playlistTrack.id !== track.id));
        }
    

    return (
        <>
        <SearchBar />
        <div className={styles.songs}>
            <SearchResults tracks={tracks} addButtonHandler={addButtonHandler}/>
            <Playlist name={playlistName} tracks={playlistTracks} removeButtonHandler={removeButtonHandler}/>
        </div>
        </>
    )
}

export default App

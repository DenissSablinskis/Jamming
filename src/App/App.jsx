import { useState } from 'react'
import styles from './App.module.css'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import { search } from '../Spotify'

function App() {
    const [tracks, setTracks] = useState([])
    const [playlistName, setPlaylistName] = useState('MyPlaylist');
    const [playlistTracks, setPlaylistTracks] = useState([
        {
            name: "test5",
            artist: "test5",
            album: "test5",
            id: 5,
            uri: "spotify:track:pqr"
        },
        {
            name: "test6",
            artist: "test6",
            album: "test6",
            id: 6,
            uri: "spotify:track:stu"
        },
        {
            name: "test7",
            artist: "test7",
            album: "test7",
            id: 7,
            uri: "spotify:track:vwx"
        },
        {
            name: "test8",
            artist: "test8",
            album: "test8",
            id: 8,
            uri: "spotify:track:yz1"
        },
            {
            name: "test9",
            artist: "test9",
            album: "test9",
            id: 9,
            uri: "spotify:track:234"
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

    function addToAccount() {
        const trackURIs = playlistTracks.map(track => track.uri);
        setPlaylistTracks([]);
    }

    function changePlaylistName({target}) {
        setPlaylistName(target.value.trim());
    }

    async function searchHandler(term) {
        const results = await search(term);
        setTracks(results);
    }

    return (
        <>
        <SearchBar searchHandler={searchHandler}/>
        <div className={styles.songs}>
            <SearchResults tracks={tracks} addButtonHandler={addButtonHandler}/>
            <Playlist name={playlistName} tracks={playlistTracks} removeButtonHandler={removeButtonHandler} addToAccount={addToAccount} changePlaylistName={changePlaylistName}/>
        </div>
        </>
    )
}

export default App

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
            id: 0,
            uri: "spotify:track:abc"
        },
        {
            name: "test1",
            artist: "test1",
            album: "test1",
            id: 1,
            uri: "spotify:track:def"
        },
        {
            name: "test2",
            artist: "test2",
            album: "test2",
            id: 2,
            uri: "spotify:track:ghi"
        },
        {
            name: "test3",
            artist: "test3",
            album: "test3",
            id: 3,
            uri: "spotify:track:jkl"
        },
            {
            name: "test4",
            artist: "test4",
            album: "test4",
            id: 4,
            uri: "spotify:track:mno"
        }
    ])
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
        if (target.value.trim()) {
            setPlaylistName(target.value.trim());
        }
    }



    return (
        <>
        <SearchBar />
        <div className={styles.songs}>
            <SearchResults tracks={tracks} addButtonHandler={addButtonHandler}/>
            <Playlist name={playlistName} tracks={playlistTracks} removeButtonHandler={removeButtonHandler} addToAccount={addToAccount} changePlaylistName={changePlaylistName}/>
        </div>
        </>
    )
}

export default App

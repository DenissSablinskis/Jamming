import { useState } from 'react'
import styles from './App.module.css'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import { search, addTracks } from '../Spotify'

function App() {
    const [tracks, setTracks] = useState([])
    const [playlistName, setPlaylistName] = useState('');
    const [playlistTracks, setPlaylistTracks] = useState([]);

   

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
        addTracks(trackURIs, playlistName);
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
            <Playlist name={playlistName}
                      tracks={playlistTracks} 
                      removeButtonHandler={removeButtonHandler} 
                      addToAccount={addToAccount} 
                      changePlaylistName={changePlaylistName}
            />
        </div>
        </>
    )
}

export default App

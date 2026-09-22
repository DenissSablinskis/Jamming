import Tracklist from "../Tracklist/Tracklist";
import styles from './Playlist.module.css';

function Playlist({tracks, removeButtonHandler,addToAccount, playlistName, changePlaylistName}) {
    return (
        <div className={styles.songs}>
            <input name='text' onChange={changePlaylistName} value={playlistName}/>
            <Tracklist tracks={tracks} isPlaylist removeButtonHandler={removeButtonHandler}/>
            <button onClick={addToAccount}>SAVE TO SPOTIFY</button>
        </div>
    )
}

export default Playlist;
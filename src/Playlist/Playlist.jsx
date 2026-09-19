import Tracklist from "../Tracklist/Tracklist";
import styles from './Playlist.module.css';

function Playlist({name, tracks, removeButtonHandler}) {
    return (
        <div className={styles.songs}>
            <h1>Playlist: {name}</h1>
            <Tracklist tracks={tracks} isPlaylist removeButtonHandler={removeButtonHandler}/>
            <button>SAVE TO SPOTIFY</button>
        </div>
    )
}

export default Playlist;
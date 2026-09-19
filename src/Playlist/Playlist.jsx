import Tracklist from "../Tracklist/Tracklist";
import styles from './Playlist.module.css';

function Playlist({name, tracks}) {
    return (
        <div className={styles.songs}>
            <h1>Playlist: {name}</h1>
            <Tracklist tracks={tracks} />
            <button>SAVE TO SPOTIFY</button>
        </div>
    )
}

export default Playlist;
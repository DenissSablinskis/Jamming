import Tracklist from "../Tracklist/Tracklist";
import styles from './Playlist.module.css';

function Playlist() {
    return (
        <div className={styles.songs}>
            <Tracklist />
            <button>SAVE TO SPOTIFY</button>
        </div>
    )
}

export default Playlist;
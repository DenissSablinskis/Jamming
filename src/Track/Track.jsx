import styles from './Track.module.css'

function Track({track}) {
    return (
        <div className={styles.tracks}>
            <div>
                <h3>Song name: {track.name}</h3>
                <p>Artist: {track.artist}</p>
                <p>Album: {track.album}</p>
            </div>
            <div>
                <button>+</button>
            </div>
        </div>
    )
}

export default Track;
import styles from './Track.module.css'

function Track({track, addButtonHandler, isPlaylist, removeButtonHandler}) {
    return (
        <div className={styles.tracks}>
            <div>
                <h3>Song name: {track.name}</h3>
                <p>Artist: {track.artist}</p>
                <p>Album: {track.album}</p>
            </div>
            <div>
                {isPlaylist ? (
                    <button onClick={() => removeButtonHandler(track)}>-</button>
                ) : (
                    <button onClick={() => addButtonHandler(track)}>+</button>
                )}
            </div>
        </div>
    )
}

export default Track;
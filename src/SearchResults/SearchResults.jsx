import styles from './SearchResults.module.css'
import Tracklist from '../Tracklist/Tracklist';



function SearchResults({tracks, addButtonHandler}) {
    return (
        <div className={styles.songs}>
            <h1>Results</h1>
            <Tracklist tracks={tracks} addButtonHandler={addButtonHandler} />
        </div>     
    )
}

export default SearchResults;
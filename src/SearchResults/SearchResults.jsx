import styles from './SearchResults.module.css'
import Tracklist from '../Tracklist/Tracklist';


function SearchResults({tracks}) {
    return (
        <div className={styles.songs}>
            <h1>Results</h1>
            <Tracklist tracks={tracks} />
        </div>     
    )
}

export default SearchResults;
import styles from './SearchResults.module.css'
import Tracklist from '../Tracklist/Tracklist';


function SearchResults() {
    return (
        <div className={styles.songs}>
            <h1>Results</h1>
            <Tracklist />
        </div>     
    )
}

export default SearchResults;
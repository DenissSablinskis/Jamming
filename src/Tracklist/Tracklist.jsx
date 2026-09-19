import styles from './Tracklist.module.css';
import Track from '../Track/Track';

function Tracklist({tracks, addButtonHandler}) {
   return (
        tracks.map(track => <Track key={track.id} track={track} addButtonHandler={addButtonHandler} />)
   )
}

export default Tracklist;
import styles from './Tracklist.module.css';
import Track from '../Track/Track';

function Tracklist({tracks}) {
   return (
        tracks.map(track => <Track key={track.id} track={track} />)
   )
}

export default Tracklist;
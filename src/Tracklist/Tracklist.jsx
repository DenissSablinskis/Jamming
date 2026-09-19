import styles from './Tracklist.module.css';
import Track from '../Track/Track';

function Tracklist({tracks, addButtonHandler, isPlaylist, removeButtonHandler}) {
   return (
        tracks.map(track => <Track key={track.id} track={track} addButtonHandler={addButtonHandler} isPlaylist={isPlaylist} removeButtonHandler={removeButtonHandler}/>)
   )
}

export default Tracklist;
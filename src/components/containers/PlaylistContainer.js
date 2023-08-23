import classes from './PlaylistContainer.module.css';
import { PlaylistCard } from '../cards/PlaylistCard';



export const PlaylistContainer = (props) => {
    

    return(
    <div className={classes['playlist-container']}>
        <div className={classes['header-container']}>
            <h1 className={classes['header']}>{props.playlist_container_name}</h1>
            <span >Show all</span>
        </div>
        <div className={classes['card-container']}>
            {props.playlists.map(e => <PlaylistCard key={e.playlist_name}  playlist_name = {e.playlist_name} playlist_desc = {e.playlist_desc} pic_url = {e.pic_url}/>)}
            
        </div>
        
    </div>)
}
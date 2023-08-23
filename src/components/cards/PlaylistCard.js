import classes from './PlaylistCard.module.css';

export const PlaylistCard = (props) => {


    return(
    <div   className={classes['card-container']}>
        <div className={classes['content-container']}>
            <img alt='playlist_pic' src={props.pic_url}/>
            <button><img alt='play_button' src='./icons/play_button.png'/></button>
            <h4>{props.playlist_name}</h4>          
            <p>{props.playlist_desc}</p>
        </div> 
       
    </div>)
}
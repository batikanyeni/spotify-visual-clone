import classes from './HomeContainer.module.css';
import { PlaylistContainer } from './PlaylistContainer';

export const HomeContainer = () => {

    const playlist_data = [{"playlist_container_name" : "Spotify Playlists", 
    "playlists" : [{"playlist_name" : "Today's Top Hits","playlist_desc":"Nicki Minaj & Ice Spice are on top of the hottest 50!","pic_url":"./playlist_images/img_1.png"},
    {"playlist_name" : "RapCaviar","playlist_desc":"New music from Trippie Redd, DJ Khaled and Yeat.","pic_url":"./playlist_images/img_2.png"},
    {"playlist_name" : "All Out 2010s","playlist_desc":"The biggest songs of the 2010s.","pic_url":"./playlist_images/img_3.png"},
    {"playlist_name" : "Rock Classics","playlist_desc":"Rock legends & epic songs that continue to inspire generations. Cover: Foo Fighters","pic_url":"./playlist_images/img_4.png"},
    {"playlist_name" : "Chill Hits","playlist_desc":"Kick back to the best new and recent chill hits.","pic_url":"./playlist_images/img_5.png"}]},
    {"playlist_container_name" : "Focus", 
    "playlists" : [{"playlist_name" : "Peaceful Piano","playlist_desc":"Peaceful piano to help you slow down, breathe, and relax.","pic_url":"./playlist_images/fcs_1.png"},
    {"playlist_name" : "Deep Focus","playlist_desc":"Keep calm and focus with ambient and post-rock music.","pic_url":"./playlist_images/fcs_2.png"},
    {"playlist_name" : "Instrumental Study","playlist_desc":"Focus with soft study music in the background.","pic_url":"./playlist_images/fcs_3.png"},
    {"playlist_name" : "Focus Flow","playlist_desc":"Uptempo instrumental hip hop beats.","pic_url":"./playlist_images/fcs_4.png"},
    {"playlist_name" : "Workday Lounge","playlist_desc":"Lounge and chill out music for your workday.","pic_url":"./playlist_images/fcs_5.png"}]}];

    


    
    return (<div className={classes['home-container']}>
            <PlaylistContainer  playlist_container_name = {playlist_data[0].playlist_container_name} playlists = {playlist_data[0].playlists}/>
            <PlaylistContainer  playlist_container_name = {playlist_data[1].playlist_container_name} playlists = {playlist_data[1].playlists}/>
    </div>)
}
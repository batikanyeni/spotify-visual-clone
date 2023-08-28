import React from "react";
import classes from './BottomBox.module.css';


export const BottomBox = () => {
    return <div className= {classes['container']}>
            <div className={classes['button_container']}>
                <button className={classes['library_button']}>
                    <img alt="home_icon" src="/icons/library.png"/>
                    <span>Your Library</span>
                </button>
                <button className={classes['plus_button']}>
                    <img src="/icons/CreatePlaylist.png" alt="plus_icon"/>
                </button>                
            </div>
            <div className={classes['scorllable-container']}>
                <div className={classes['info-box-1']}>
                    <span className={classes['span-1']}>Create your first playlist</span>
                    <span className={classes['span-2']}>It's easy,we'll help you</span>
                    <button>Create Playlist</button>
                </div>
                <div className={classes['info-box-1']}>
                    <span className={classes['span-1']}>Let's find some podcasts to follow</span>
                    <span className={classes['span-2']}>We'll keep you updated on new episodes</span>
                    <button>Browse Podcasts</button>
                </div>
            </div>
            <div className={classes['link-container']}>
                <a href="/">Legal</a>
                <a href="/">Privacy Center</a>
                <a href="/">Privacy Policy</a>
                <a href="/">Cookies</a>
                <a href="/">About ads</a>
               
            </div>
            <a className={classes['cookie']} href="/">Accessibility</a>
            <br></br>            
            <a className= {classes['cookie']} href="/">Cookies</a>
            <br></br>
         
            <button className={classes['lang-button']}>
                <img src="/icons/choose-lang.png" alt="world"/>
                <span>English</span>
            </button>

    </div>

}
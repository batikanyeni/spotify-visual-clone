import classes from './DownloadPage.module.css'
import { ResponsiveHeader } from '../header&banners/ResponsiveHeader'
import {Footer} from '../header&banners/Footer'


export const DownloadPage = () => {


    return (<div className={classes['download-page']}>
        <ResponsiveHeader/>
        <div className={classes['download-section']}>
            <div  className = {classes['laptop-container']}>
                <img className={classes['laptop']} alt='laptop' src='./icons/laptop.png'/>
                <img className={classes['green-circle']} alt='green-circle' src='./icons/green-circle.png'/>
                <img className={classes['green-success']} alt='green-success' src='./icons/green-success-check.png'/>
            </div>
            <h1>Download Spotify</h1>
            <p>Play millions of songs and podcasts on your device.</p>
            <img alt='microsoft-download' src='./icons/microsoft-download.png'/>
            <div className={classes['link-container']}>
                <a href='/'>Download directly from Spotify</a>
            </div>
        </div>
        <div className={classes['platforms-container']}>
            <h1>Bring your music to mobile and tablet, too.</h1>
            <h4>Listening on your phone or tablet is free, easy, and fun.</h4>
            <div className={classes['btn-container']}>
                <img alt='app-store' src='./icons/apple-download.png'/>
                <img alt='google-play' src='./icons/google-download.png'/>
                <img alt='microsoft-download' src='./icons/microsoft-download.png'/>
                <img alt='amazon-download' src='./icons/amazon-download.png'/>
            </div>
        </div>
        <div className={classes['all-devices']}>
            <img alt='all-devices' src='./icons/all-devices.png'/>
            <h1>One account, listen everywhere.</h1>
            <div className={classes['devices-list']}>
                <span>MOBILE</span>
                <div className={classes['green-dot']}/>
                <span>COMPUTER</span>
                <div className={classes['green-dot']}/>
                <span>TABLET</span>
                <div className={classes['green-dot']}/>
                <a href='/'>CAR</a>
                <div className={classes['green-dot']}/>
                <a href='/'>PLAYSTATION®</a>
                <div className={classes['green-dot']}/>
                <a href='/'>XBOX</a>
                <div className={classes['green-dot']}/>
                <a href='/'>TV</a>
                <div className={classes['green-dot']}/>
                <a href='/'>SPEAKER</a>
                <div className={classes['green-dot']}/>
                <a href='/'>WEB&nbsp;PLAYER</a>
            </div>
        </div>
        <Footer/>
    </div>)
}
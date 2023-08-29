import classes from './SupportPage.module.css'
import { ResponsiveHeader } from '../header&banners/ResponsiveHeader'
import {Footer} from '../header&banners/Footer'



export const SupportPage = () => {

    return (<div className={classes['support-page']}>
        <div className={classes['header-gradient']}>
            <ResponsiveHeader headerStyle = {{background: 'transparent'}}/>
        </div>
        <div className={classes['help-container']}>
            <p className={classes.p1}>SPOTIFY SUPPORT</p>
            <h1>How can we help you?</h1>
            <p className={classes.p2}><a href='/login'>Log in </a>for faster help</p>
            <div className={classes['search-section']}>
                <div className={classes['input-container']}>
                    <img alt='search-icon' src='./icons/search_icon.png'/>
                    <input placeholder='Search'></input>
                </div>
                <div className={classes['img-container']}>
                    <img alt='searh_img' src='./search_images/payment_help.png'/>
                    <img alt='searh_img' src='./search_images/account_help.png'/>
                    <img alt='searh_img' src='./search_images/plan_help.png'/>
                    <img alt='searh_img' src='./search_images/app_help.png'/>
                    <img alt='searh_img' src='./search_images/device_help.png'/>
                    <img alt='searh_img' src='./search_images/safety.png'/>       
                </div>
            </div>
        </div>
        <div className={classes['quick-help']}>
            <div className={classes['qhelp-container']}>
                <p>Quick help</p>
                <a href='/'>Can't reset password<img alt='right_arrow' src='./icons/right-arrow-grey-bg.png'/></a>
                <a href='/'>Can't remember login details<img alt='right_arrow' src='./icons/right-arrow-grey-bg.png'/></a>
                <a href='/'>Facebook login help<img alt='right_arrow' src='./icons/right-arrow-grey-bg.png'/></a>
                <a href='/'>Payment methods<img alt='right_arrow' src='./icons/right-arrow-grey-bg.png'/></a>
                <a href='/'>Price Updates<img alt='right_arrow' src='./icons/right-arrow-grey-bg.png'/></a>
            </div>
        </div>
        <div className={classes['visit-section']}>
            <h1>Visit our Community</h1>
            <p>Have questions? Find answers from our worldwide Community of expert fans!</p>
            <button>Go to Community</button>
        </div>
        <Footer/>
    
    </div>)
}
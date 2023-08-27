import classes from './PremiumPage.module.css'
import { ResponsiveHeader } from '../header&banners/ResponsiveHeader'

export const PremiumPage = () => {



    return <div className={classes['premium-page']}>
        <ResponsiveHeader />
        <div className={classes['top-info']}>
            <div className={classes['premium-info']}>
                <h1>$0 for 3 months of Premium</h1>
                <h3>Enjoy ad-free music listening, offline playback, and more. Cancel anytime.</h3>
                <div className={classes['btn-container']}>
                    <button className={classes.btn1}>Get 3 months for $0</button>
                    <button className={classes.btn2}>View plans</button>
                </div>
                <p>Individual plan only. $10.99/month after. <a href='/'>Terms and conditions apply.</a> Open only to users who haven't already tried Premium. Offer ends September 12, 2023.</p>
            </div>
            <img alt='premium' src='./playlist_images/premium.png'/>
        </div>
    </div>
}
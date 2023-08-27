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
        <div className={classes['middle-info']}>
            <h1>Why go Premium?</h1>
            <div className={classes['advantages-container']}>
                <div className={classes['advantage']}>
                    <img alt='download-music' src='./icons/downloadMusic.png'/>
                    <div>
                        <p className={classes['p1']}>Download Music.</p>
                        <p className={classes['p2']}>Listen anywhere.</p>
                    </div>
                </div>
                <div className={classes['advantage']}>
                    <img alt='download-music' src='./icons/ad-free.png'/>
                    <div>
                        <p className={classes['p1']}>Ad-free music listening.</p>
                        <p className={classes['p2']}>Enjoy nonstop music..</p>
                    </div>
                </div>
                <div className={classes['advantage']}>
                    <img alt='download-music' src='./icons/any-song.png'/>
                    <div>
                        <p className={classes['p1']}>Play any song.</p>
                        <p className={classes['p2']}>Even on mobile.</p>
                    </div>
                </div>
                <div className={classes['advantage']}>
                    <img alt='download-music' src='./icons/unlimited-skip.png'/>
                    <div>
                        <p className={classes['p1']}>Unlimited skips.</p>
                        <p className={classes['p2']}>Just hit next.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
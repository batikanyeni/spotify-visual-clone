import classes from './BottomBanner.module.css';

export const BottomBanner = () => {



    return(
    <div className={classes['bottom-banner']}>
        <div className={classes['text-container']}>
            <span className={classes['p1']}>PREVIEW OF SPOTIFY</span>
            <span className={classes['p2']}>Sign up to get unlimited songs and podcasts with occational ads. No credit card needed. </span>
        </div>
        <button className={classes['sign-up-btn']}>Sign up free</button>
        
    </div>)
}
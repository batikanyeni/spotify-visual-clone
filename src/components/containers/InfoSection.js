import classes from './InfoSection.module.css';

export const InfoSection = () => {


    return(
    <div className={classes['main-container']}>
        <div className={classes['top-container']}>
            <div className={classes['link-container']}>
                <span>Company</span>
                <a href='/'>About</a>
                <a href='/'>Jobs</a>
                <a href='/'>For the Record</a>
            </div>
            <div className={classes['link-container']}>
                <span>Communities</span>
                <a href='/'>For Artists</a>
                <a href='/'>For Developers</a>
                <a href='/'>Advertising</a>
                <a href='/'>Investors</a>
                <a href='/'>Vendors</a>
            </div>
            <div className={classes['link-container']}>
                <span>Useful Links</span>
                <a href='/'>Support</a>
                <a href='/'>Free Mobile App</a>
            </div>
            <div className={classes['button-container']}>
                <button><img alt='instagram-button' src='./icons/inst.png'/></button>
                <button><img alt='instagram-button' src='./icons/twt.png'/></button>
                <button><img alt='instagram-button' src='./icons/face.png'/></button>
            </div>
        </div>
        <div className={classes['bottom-container']}>
            <hr/>          
            <span>© 2023 Spotify AB</span>
        </div>
    </div>)
}